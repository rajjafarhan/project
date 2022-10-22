import React from 'react'
import"./Heading.css"

const Heading = (props) => {
  return (
    <div className='heading'>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Heading
