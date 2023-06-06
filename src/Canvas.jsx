import Node from './components/Node'
import { useNode } from './lib/useNode'

const Canvas = () => {
  const { nodes, setNodes, event } = useNode()

  return (
    <div
      className='editor'
      onPointerDown={event.onPointerDown}
      onPointerUp={event.onPointerUp}
      onPointerMove={event.onPointerMove}
    >
      {Object.entries(nodes).map(([uuid, value]) => (
        <Node key={uuid} uuid={uuid} value={value} />
      ))}

      <button
        onClick={() => {
          setNodes({
            ...nodes,
            [crypto.randomUUID()]: {
              position: {
                x: window.innerWidth / 2 - 80,
                y: window.innerHeight / 2 - 120,
              },
            },
          })
        }}
        className='px-4 py-2 border absolute left-[45%] top-10 bg-slate-900 text-white rounded active:scale-95 hover:bg-slate-400 transition'
      >
        Create Node
      </button>
    </div>
  )
}

export default Canvas
