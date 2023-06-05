const Node = ({ uuid, value }) => {
  const { x, y } = value.position

  return (
    <div
      className='w-40 h-60 bg-cyan-600 absolute'
      data-name='node'
      data-uuid={uuid}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  )
}

export default Node
