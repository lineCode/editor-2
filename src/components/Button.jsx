import { useNode } from '../lib/useNode'

const Button = () => {
  const { nodes, setNodes } = useNode()

  return (
    <button
      onClick={() => {
        setNodes({
          ...nodes,
          [crypto.randomUUID()]: {
            position: {
              x: 0,
              y: 0,
            },
          },
        })
      }}
      className='px-4 py-2 border border-black absolute left-0 bottom-0'
    >
      Create Node
    </button>
  )
}

export default Button
