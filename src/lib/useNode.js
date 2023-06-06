import { useRef, useState } from 'react'

export const useNode = () => {
  const [nodes, setNodes] = useState({})
  const target = useRef(null)

  const onPointerMove = (e) => {
    const uuid = target.current

    if (uuid) {
      setNodes({
        ...nodes,
        [uuid]: {
          position: {
            x: nodes[uuid].position.x + e.movementX,
            y: nodes[uuid].position.y + e.movementY,
          },
        },
      })
    }
  }

  const onPointerDown = (e) => {
    const { uuid } = e.target.dataset
    if (uuid) {
      target.current = uuid
    }
  }

  const onPointerUp = () => {
    target.current = null
  }

  return {
    nodes,
    setNodes,
    event: {
      onPointerMove,
      onPointerDown,
      onPointerUp,
    },
  }
}
