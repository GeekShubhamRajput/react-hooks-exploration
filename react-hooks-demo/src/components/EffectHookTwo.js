import { useEffect, useState } from 'react'

export const EffectHookTwo = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
  }
  
  useEffect(() => {
    console.log('Run effects only once')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }

  }, [])

  return(
    <div>
      <p><span>X - {x}</span></p>
      <span>Y - {y}</span>
      <hr /><br />
    </div>
  )
}
