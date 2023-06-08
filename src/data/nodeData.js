// Icon Images
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
import { GiThreeLeaves } from 'react-icons/gi'

import Logo from '../components/Logo'

export const nodeData = [
  {
    type: '이벤트',
    nodes: [
      {
        name: '마우스',
        Image: TbMouse2,
      },
      {
        name: '마우스 좌표',
        Image: TbMouse2,
      },
      {
        name: '마우스 레이캐스트',
        Image: TbMouse2,
      },
      {
        name: '키보드',
        Image: TbKeyboard,
      },
      {
        name: '시작',
        Image: RiPlayCircleLine,
      },
      {
        name: '타이머',
        Image: LuTimer,
      },
    ],
  },

  {
    type: '사물',
    nodes: [
      {
        name: '카메라',
        Image: BiCamera,
      },
      {
        name: '포인트 라이트',
        Image: CgSun,
      },
      {
        name: '스포트 라이트',
        Image: CgSun,
      },
      {
        name: '오브젝트',
        Image: FiBox,
      },
    ],
  },

  {
    type: '연산',
    nodes: [
      {
        name: '벡터 연산',
        Image: Logo,
        letter: 'V',
      },
      {
        name: '벡터 비교',
        Image: Logo,
        letter: 'V',
      },
      {
        name: '넘버 연산',
        Image: Logo,
        letter: 'N',
      },
      {
        name: '넘버 비교',
        Image: Logo,
        letter: 'N',
      },
      {
        name: '넘버 절대값•제곱근',
        Image: Logo,
        letter: 'N',
      },
      {
        name: '불리언 연산',
        Image: Logo,
        letter: 'B',
      },
    ],
  },

  {
    type: '논리',
    nodes: [
      {
        name: '랜덤',
        Image: GiPerspectiveDiceSixFacesRandom,
      },
    ],
  },

  {
    type: '센서',
    nodes: [
      {
        name: '위치',
        Image: TbCurrentLocation,
      },
      {
        name: '각도',
        Image: RxAngle,
      },
      {
        name: '스케일',
        Image: IoResize,
      },
    ],
  },

  {
    type: '상수',
    nodes: [
      {
        name: '불리언',
        Image: Logo,
        letter: 'B',
      },
      {
        name: '넘버',
        Image: Logo,
        letter: 'N',
      },
      {
        name: '벡터',
        Image: Logo,
        letter: 'V',
      },
      {
        name: '컬러',
        Image: LuPalette,
      },
      {
        name: '머티리얼',
        Image: GiThreeLeaves,
      },
    ],
  },

  {
    type: '변환',
    nodes: [
      {
        name: '변환',
        Image: TbStatusChange,
      },
    ],
  },
]
