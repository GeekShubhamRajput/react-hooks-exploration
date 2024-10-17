import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

export const ContextHook = () => {
  
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return(
    <div>
      <p>User - {user} and channel - {channel}</p>
    </div>
  )
}
