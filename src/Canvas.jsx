import Button from './components/Button'
import Node from './components/Node'
import { useNode } from './lib/useNode'

const Canvas = () => {
  const { nodes, event } = useNode()

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

      <button onClick={event.onClick} className='button'>
        Create Node
      </button>
    </div>
  )
}

export default Canvas
