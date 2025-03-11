import React, { useState } from 'react'

const UseStateHook = () => {

  const [flag, setFlag] = useState(false); // here false is initialValue

  const handleToggleText = () => {
    setFlag(!flag);
  }

  return (
    <div>
      <h3 className='title'>Commerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {
        flag ? (
          <h4>Prabhas and Vizag</h4>
        ) : (
          <h4>Hello</h4>
        )
      }
    </div>
  )
}

export default UseStateHook;