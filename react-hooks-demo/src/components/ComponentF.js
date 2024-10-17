import React from 'react'
import { UserContext, ChannelContext } from '../App'

export const ComponentF = () => {
  return(
    <div>
      <UserContext.Consumer >
        { 
          user => {
            return(
              <ChannelContext.Consumer >
                {
                  channel => {
                    return(
                      <div>
                        <p>User name is {user} and channel is {channel}</p>
                      </div>
                    )
                  } 
                }
              </ChannelContext.Consumer >
            )
          }
        }
      </UserContext.Consumer >
    </div>
  )
}
