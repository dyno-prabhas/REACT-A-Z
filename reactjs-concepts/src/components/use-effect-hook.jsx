import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

   const [flag, setFlag] = useState(false); // here false is initialValue
   const [count, setCount] = useState(0);
   const [changeStyle, setChangeStyle] = useState(false);
  
    const handleToggleText = () => {
      setFlag(!flag);
    }

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {

        setFlag(!flag);
    }, []); // this is dependency when we keep empty its load at once 
    // if we add any like [flag]. its happen everytime when that flag is changed  
  
    useEffect(() => {

        if (count === 10) setChangeStyle(true);
    }, [count]);


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
        <div>
            <button style={{ backgroundColor: changeStyle ? 'blue' : 'white' }} onClick={handleIncreaseCount}>Increase Count</button>
            <p>Count is {count}</p>
        </div>
      </div>
    )
}

export default UseEffectHook