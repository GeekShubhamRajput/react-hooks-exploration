import { useEffect, useState } from 'react'

export const EffectHookTimer = () => {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return(
    <div>
      <span>Timer : {count}</span>
    </div>
  )
}
