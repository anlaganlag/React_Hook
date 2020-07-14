import React ,{useState,useReducer} from 'react'

function reducer(state,action){
  return {count:state.count+10}
}


export default function App() {
  const [state, dispatch] = useReducer(reducer, { count:0 })

  function increment(){
    dispatch()
  }


  function decrement(){
    // setCount(cur => cur-1)
  }
  // console.log(count**2)

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
