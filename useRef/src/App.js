import React ,{useState,useCallback} from 'react';

export default function App() {
  const [name, setName] = useState('')
  

  return (
    <div >
        <input
          value={name}
          onChange={e => setName(e.target.value)}/>
        <div>My name is {name}</div>

    </div>
  )
}
