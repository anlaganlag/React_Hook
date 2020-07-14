import React ,{useState} from 'react'
import FC  from './FC'
import CC  from './CC'

export const TC = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div>
      <TC.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FC />
        <CC />
      </TC.Provider>
    </div>
  )
}
