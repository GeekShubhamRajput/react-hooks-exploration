import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const FetchPosts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data)
      setPosts(res.data)
    }).catch(err => console.log(err))
  }, [])

  return(
    <div>
      <h1>Posts</h1>
      <ol>
        {
          posts.map(post => <li key={post.id} >{post.title}</li>)
        }
      </ol>
    </div>
  )
}
