import  {  useState, useRef } from 'react'
import './App.css'

function App() {
  const input = useRef ()
  const [show, setShow] = useState (false)

  function handlerKeyClick (e) {
    if (e.key === 'Enter') {
      setShow(true)
    }
  }
  
  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input ref={ input } type='text' onKeyDown={handlerKeyClick} />
      <div 
        style={{
          cursor: 'pointer',
          padding: '10px',
        }}
        onClick={() => {
          input.current.value = null
          setShow(false)
        }}>Reset</div>
    </div>
    
  )
}

export default App
