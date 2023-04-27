import React, { useState } from 'react'

function HooksCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0 ; i<5 ; i++)
        setCount(prvcnt => prvcnt +1)
    }

  return (
    <div>
     Count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button><br></br>
      <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
      <button onClick={() => setCount(count - 1)}>Derement</button><br></br>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HooksCounterTwo
