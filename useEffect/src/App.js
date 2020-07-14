import React ,{useState,useEffect,useRef} from 'react';

export default function App() {
  const [res, setRes] = useState('posts')

 


  return (
    <div>
        <div>
          <button onClick={()=>setRes('posts')}>Posts</button>
          <button onClick={()=>setRes('users')}>Users</button>
          <button onClick={()=>setRes('comments')}>Comments</button>
        </div>
      <h1> {res} </h1>
    </div>
  )
}
