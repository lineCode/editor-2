const Node = ({ uuid, value }) => {
  const { x, y } = value.position

  return (
    <div
      className='w-40 h-60 bg-slate-200 absolute rounded-lg cursor-pointer hover:z-10  outline-1 outline-double outline-slate-400'
      data-name='node'
      data-uuid={uuid}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  )
}

export default Node
