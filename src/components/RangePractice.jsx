import React, { useState } from 'react'

const RangePractice = () => {
const [value, setValue] = useState(0)

const handleChange = (e) => {
  const newValue = Number(e.target.value)

  if (newValue > value) {
    setValue(value + 1)
  } else if (newValue < value) {
    setValue(value - 1)
  }
}
   
  return (
    <div>
      <h1>{value}</h1>

      <input
        type="range"
        min={0}
        max={200}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default RangePractice
