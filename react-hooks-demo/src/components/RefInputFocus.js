import {useEffect, useRef} from 'react'

export const RefInputFocus = () => {

  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus();
  })

  return(
    <input ref={inputRef} type='text' />
  )
}
