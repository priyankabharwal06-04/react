import React from 'react'

function Products({name,data}) {
  return (
    <div className='w-full h-60 rounded-xl bg-zinc-700 text-white'>{name}
    <h1>{data.age}</h1>
    <h1>{data.dept}</h1>
    </div>
  )
}

export default Products