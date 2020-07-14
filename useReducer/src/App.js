import React ,{useState} from 'react'


export default function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(cur => cur+1)
  }

  function decrement(){
    setCount(cur => cur-1)
  }
  console.log(count**2)

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
