import { useEffect, useState} from 'react'
import { EffectHookTwo } from './EffectHookTwo'


export const EffectWithCleanUp = () => {
  const [display, setDisplay] = useState(true)

  return(
    <div>
      <p>useEffect with cleanup</p>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      { display && <EffectHookTwo /> }
      <hr /><br />
    </div>
  )
}

