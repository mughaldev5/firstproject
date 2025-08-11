
import React from 'react'


const Card = ({name, address}) => {
  return (
    <div className='bg-red-400'>
      <div>
        <h1>Name :{name}</h1>
        <h2> Address:{address}</h2>
      </div>
    </div>
  )
}

export default Card
