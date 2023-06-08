import Header from './components/Header'
import Node from './components/Node'
import { useNode } from './hooks/useNode'

const Canvas = () => {
  const { nodes, setNodes, event } = useNode()

  return (
    <div
      className='bg-[#fafafa] h-screen relative'
      onPointerDown={event.onPointerDown}
      onPointerUp={event.onPointerUp}
      onPointerMove={event.onPointerMove}
    >
      {/* Header 1 */}
      <Header />

      {/* Nodes */}

      {Object.entries(nodes).map(([uuid, value]) => (
        <Node key={uuid} uuid={uuid} value={value} />
      ))}

      {/* Create Node Button */}

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
        className='px-4 py-2 border absolute right-10 bottom-10 bg-slate-900 text-white rounded active:scale-95 hover:bg-slate-400 transition'
      >
        Create Node
      </button>
    </div>
  )
}

export default Canvas
