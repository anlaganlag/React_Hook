import React ,{useState,useEffect,useRef} from 'react';

export default function App() {
  const [name, setName] = useState('')
  const prevName = useRef()

  useEffect(() => {
    prevName.current = name
  }, [name])

  console.log({prevName})

  return (
    <div >
        <input
          value={name}
          onChange={e => setName(e.target.value)}/>
        <div>My name is {name} and it used to be {prevName.current}</div>

    </div>
  )
}
