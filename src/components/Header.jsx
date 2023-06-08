import { Fragment, useState } from 'react'
import { BiSquareRounded } from 'react-icons/bi'
import { GoDash, GoX } from 'react-icons/go'
import { nodeData } from '../data/nodeData'

import { LuFileSpreadsheet, LuLeaf } from 'react-icons/lu'
import { TbHistory } from 'react-icons/tb'
import { VscTypeHierarchySub } from 'react-icons/vsc'

const colors = [
  'bg-rose-500',
  'bg-cyan-500',
  'bg-indigo-500',
  'bg-fuchsia-500',
  'bg-violet-500',
  'bg-amber-500',
  'bg-red-500',
  'bg-zinc-500',
]

const MENU = {
  NODE: 'node',
  SHEET: 'sheet',
  HISTORY: 'history',
  HIERARCHY: 'hierarchy',
  DEFAULT: 'default',
}

const Header = () => {
  const [menu, setMenu] = useState(MENU.DEFAULT)

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      {/* Top Header */}
      <div className='bg-[#6D71F9] flex text-white px-4 py-2 justify-between items-center select-none shadow'>
        <div className='flex gap-4 items-center'>
          <h1 className='font-semibold'>Editor</h1>

          <div className='gap-2 text-xs hidden md:flex'>
            <button>컴포넌트</button>
            <button>플러그인</button>
            <button>설정</button>
            <button>도움말</button>
          </div>

          <div className='w-[1.6px] h-4 bg-white' />

          <div className='text-white text-xs font-bold flex gap-3'>
            <button>캔버스</button>
            <button className='text-yellow-300 flex items-center'>
              <span>인터랙션 에디터</span>
            </button>
          </div>
        </div>

        <div className='flex gap-3 items-center'>
          <button>
            <GoDash className='text-xl' />
          </button>
          <button>
            <BiSquareRounded />
          </button>
          <button>
            <GoX />
          </button>
        </div>
      </div>

      <div className='flex absolute left-0 gap-1 p-1 pt-2 pl-2'>
        <div className='flex flex-col pr-0 gap-1 h-48'>
          <button
            onClick={() => (menu === MENU.NODE ? setMenu(MENU.DEFAULT) : setMenu(MENU.NODE))}
            className={`bg-slate-400 hover:text-indigo-200 text-white w-10 h-10 rounded text-xl flex items-center justify-center ${
              menu === MENU.NODE && 'bg-slate-800'
            }`}
          >
            <LuLeaf />
          </button>
          <button
            onClick={() => (menu === MENU.SHEET ? setMenu(MENU.DEFAULT) : setMenu(MENU.SHEET))}
            className={`bg-slate-400 hover:text-indigo-200 text-white w-10 h-10 rounded text-xl flex items-center justify-center ${
              menu === MENU.SHEET && 'bg-slate-800'
            }`}
          >
            <LuFileSpreadsheet />
          </button>
          <button
            onClick={() => (menu === MENU.HISTORY ? setMenu(MENU.DEFAULT) : setMenu(MENU.HISTORY))}
            className={`bg-slate-400 hover:text-indigo-200 text-white w-10 h-10 rounded text-xl flex items-center justify-center ${
              menu === MENU.HISTORY && 'bg-slate-800'
            }`}
          >
            <TbHistory />
          </button>
          <button
            onClick={() => (menu === MENU.HIERARCHY ? setMenu(MENU.DEFAULT) : setMenu(MENU.HIERARCHY))}
            className={`bg-slate-400 hover:text-indigo-200 text-white w-10 h-10 rounded text-xl flex items-center justify-center ${
              menu === MENU.HIERARCHY && 'bg-slate-800'
            }`}
          >
            <VscTypeHierarchySub />
          </button>
        </div>

        {/* Sidebar */}
        {menu === MENU.NODE && (
          <div className='w-[22rem] flex'>
            <div className='select-none grid grid-cols-4 gap-[.05rem] content-start'>
              {nodeData.map(({ type, nodes }, i) => (
                <Fragment key={type}>
                  {nodes.map(({ name, Image, letter }) => (
                    <button
                      key={name}
                      className={`text-slate-100 flex items-center gap-1 border border-slate-300 p-2 rounded justify-center flex-col aspect-square shadow-lg hover:opacity-80 ${colors[i]}`}
                    >
                      {letter ? <Image text={letter} /> : <Image className='text-xl' />}
                      <span className='text-xs text-center'>{name}</span>
                    </button>
                  ))}
                </Fragment>
                //
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Container = ({ children }) => {
  return (
    <div className='p-4 flex flex-col items-center gap-3'>
      <div className='flex gap-2'>{children}</div>
    </div>
  )
}

const Button = ({ name, Image, letter }) => {
  return (
    <button className='flex flex-col gap-2 items-center w-12'>
      {letter ? <Image text={letter} /> : <Image className='text-2xl' />}
      <span className='text-xs font-bold'>{name}</span>
    </button>
  )
}

const DividingLine = () => {
  return <div className='w-[2px] min-w-[2px] h-16 bg-slate-300' />
}

export default Header
