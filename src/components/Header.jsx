import { useState } from 'react'
import { BiChevronDown, BiChevronUp, BiSquareRounded } from 'react-icons/bi'
import { GoDash, GoX } from 'react-icons/go'

import { MdOutlineCalculate } from 'react-icons/md'
import { TbMouse2, TbKeyboard, TbLogicAnd, TbCurrentLocation, TbStatusChange } from 'react-icons/tb'
import { RiPlayCircleLine } from 'react-icons/ri'
import { LuTimer, LuGitCompare, LuPalette } from 'react-icons/lu'
import { BiCamera } from 'react-icons/bi'
import { CgSun, CgHashtag } from 'react-icons/cg'
import { FiBox } from 'react-icons/fi'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import { RxAngle } from 'react-icons/rx'
import { IoResize } from 'react-icons/io5'
import { VscLibrary } from 'react-icons/vsc'

const Header = () => {
  const [isExpand, setIsExpand] = useState(true)

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
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

      {isExpand && (
        <div className='flex shadow border-b border-gray-300 items-center select-none bg-white'>
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <TbMouse2 className='text-2xl' />
              <span className='text-xs font-bold'>마우스</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <TbKeyboard className='text-2xl' />
              <span className='text-xs font-bold'>키보드</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <RiPlayCircleLine className='text-2xl' />
              <span className='text-xs font-bold'>시작</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <LuTimer className='text-2xl' />
              <span className='text-xs font-bold'>타이머</span>
            </button>
          </Box>
          <Line />
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <BiCamera className='text-2xl' />
              <span className='text-xs font-bold'>카메라</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <CgSun className='text-2xl' />
              <span className='text-xs font-bold'>광원</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <FiBox className='text-2xl' />
              <span className='text-xs font-bold'>오브젝트</span>
            </button>
          </Box>
          <Line />
          <div className='p-4 flex flex-col items-center gap-3'>
            <div className='flex gap-2'>
              <button className='flex flex-col gap-2 items-center w-12'>
                <MdOutlineCalculate className='text-2xl' />
                <span className='text-xs font-bold'>연산</span>
              </button>
            </div>
          </div>
          <Line />
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <CgHashtag className='text-2xl' />
              <span className='text-xs font-bold'>수치</span>
            </button>
          </Box>
          <Line />
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <TbLogicAnd className='text-2xl' />
              <span className='text-xs font-bold'>AND/OR</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <GiPerspectiveDiceSixFacesRandom className='text-2xl' />
              <span className='text-xs font-bold'>랜덤</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <LuGitCompare className='text-2xl' />
              <span className='text-xs font-bold'>비교</span>
            </button>
          </Box>
          <Line />
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <TbCurrentLocation className='text-2xl' />
              <span className='text-xs font-bold'>위치</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <RxAngle className='text-2xl' />
              <span className='text-xs font-bold'>각도</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <IoResize className='text-2xl' />
              <span className='text-xs font-bold'>스케일</span>
            </button>
          </Box>
          <Line />
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <Logo text='B' />
              <span className='text-xs font-bold'>불리언</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <Logo text='N' />
              <span className='text-xs font-bold'>넘버</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <Logo text='V' />
              <span className='text-xs font-bold'>벡터</span>
            </button>
            <button className='flex flex-col gap-2 items-center w-12'>
              <LuPalette className='text-2xl' />
              <span className='text-xs font-bold'>컬러</span>
            </button>
          </Box>
          <Line />
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <TbStatusChange className='text-2xl' />
              <span className='text-xs font-bold'>변환</span>
            </button>
          </Box>
          <Line />
          <Box>
            <button className='flex flex-col gap-2 items-center w-12'>
              <VscLibrary className='text-2xl' />
              <span className='text-xs font-bold'>Library</span>
            </button>
          </Box>
          <Line />
        </div>
      )}
    </div>
  )
}

const Box = ({ children }) => {
  return (
    <div className='p-4 py-4 flex flex-col items-center gap-3'>
      <div className='flex gap-2'>{children}</div>
    </div>
  )
}

const Line = () => {
  return <div className='w-[2px] min-w-[2px] h-16 bg-slate-300' />
}

const Logo = ({ text }) => {
  return (
    <div className='font-semibold w-[1.4rem] h-[1.4rem] flex items-center justify-center rounded border-2 border-black'>
      {text}
    </div>
  )
}

export default Header
