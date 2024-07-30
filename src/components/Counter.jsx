import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [showCount,setShowCount] = useState(false)
  return (
    <div>
        <button onClick={()=>setShowCount(!showCount)}>{showCount? 'Show Count' : 'Hide Show Count'}</button>
        {
            !showCount ?(
                <>
                     <h2>Counter Show Open</h2>
                    <h3>Counter is- {count}</h3>
                    <button onClick={()=>setCount(count+1)}>Increment</button>
                    <button onClick={()=>setCount(count-1)}>Degrement</button>
                    <button onClick={()=>setCount(0)}>Reset</button>
                </>
            ):null
        }
       
    </div>
  )
}

export default Counter