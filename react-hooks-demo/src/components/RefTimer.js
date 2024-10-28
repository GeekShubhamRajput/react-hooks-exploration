import {useState, useEffect, useRef} from 'react'

function RefTimer(){
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() =>{
      setTimer(preTimer => preTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return(
    <div>
      <span>Ref Timer - {timer}</span><br /><br />
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default RefTimer
