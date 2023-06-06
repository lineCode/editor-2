import { useState } from 'react'
import { BiChevronDown, BiChevronUp, BiSquareRounded } from 'react-icons/bi'
import { GoDash, GoX } from 'react-icons/go'

import { MdOutlineCalculate } from 'react-icons/md'
import { TbMouse2, TbKeyboard } from 'react-icons/tb'
import { RiPlayCircleLine } from 'react-icons/ri'
import { LuTimer } from 'react-icons/lu'
import { BiCamera } from 'react-icons/bi'
import { CgSun } from 'react-icons/cg'
import { FiBox } from 'react-icons/fi'

const Header1 = () => {
  const [isExpand, setIsExpand] = useState(true)

  return (
    <>
      <div className='bg-[#6D71F9] flex text-white px-4 py-2 justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <h1 className='font-semibold'>Editor</h1>

          <div className='flex gap-2 text-xs'>
            <button>컴포넌트</button>
            <button>플러그인</button>
            <button>설정</button>
            <button>도움말</button>
          </div>

          <div className='w-[1.6px] h-4 bg-white' />

          <div className='text-white text-xs font-semibold flex gap-3'>
            <button>캔버스</button>
            <button onClick={() => setIsExpand((prev) => !prev)} className='text-yellow-300 flex items-center'>
              <span>인터랙션 에디터</span>
              {isExpand ? <BiChevronUp className='text-xl' /> : <BiChevronDown className='text-xl' />}
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

      <div className='flex gap-3'>
        <div className='p-3 flex flex-col items-center gap-3'>
          <div className='flex gap-4'>
            <button className='flex flex-col gap-2 items-center'>
              <TbMouse2 className='text-2xl' />
              <span className='text-xs font-semibold'>마우스</span>
            </button>
            <button className='flex flex-col gap-2 items-center'>
              <TbKeyboard className='text-2xl' />
              <span className='text-xs font-semibold'>키보드</span>
            </button>
            <button className='flex flex-col gap-2 items-center'>
              <RiPlayCircleLine className='text-2xl' />
              <span className='text-xs font-semibold'>시작</span>
            </button>
            <button className='flex flex-col gap-2 items-center'>
              <LuTimer className='text-2xl' />
              <span className='text-xs font-semibold'>타이머</span>
            </button>
          </div>
          <span className='text-xs'>입력</span>
        </div>

        <div className='p-3 flex flex-col items-center gap-3'>
          <div className='flex gap-4'>
            <button className='flex flex-col gap-2 items-center'>
              <BiCamera className='text-2xl' />
              <span className='text-xs font-semibold'>카메라</span>
            </button>
            <button className='flex flex-col gap-2 items-center'>
              <CgSun className='text-2xl' />
              <span className='text-xs font-semibold'>광원</span>
            </button>
            <button className='flex flex-col gap-2 items-center'>
              <FiBox className='text-2xl' />
              <span className='text-xs font-semibold'>오브젝트</span>
            </button>
          </div>
          <span className='text-xs'>사물</span>
        </div>

        <div className='p-2 flex flex-col items-center gap-2'>
          <div className='flex gap-2'>
            <button className='flex flex-col gap-2 items-center'>
              <MdOutlineCalculate className='text-2xl' />
              <span className='text-xs font-semibold'>연산노드</span>
            </button>
          </div>
          <span className='text-xs'>연산</span>
        </div>

        <div className='p-2 flex flex-col items-center gap-2'>
          <div className='flex gap-2'>
            <button className='flex flex-col gap-2 items-center'>
              <TbMouse2 className='text-2xl' />
              <span className='text-xs font-semibold'>마우스</span>
            </button>
          </div>
          <span className='text-xs'>수치</span>
        </div>
      </div>
    </>
  )
}

export default Header1
