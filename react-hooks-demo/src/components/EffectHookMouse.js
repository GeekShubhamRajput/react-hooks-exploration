import { useState, useEffect } from "react"

export const EffectHookMouse = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(){
    setX(x: )
    window.addEventListener('mousemove', this.logMousePosition)
  }

  return(
    <div>
      X - {x}
      Y - {y}
    </div>
  )
}
