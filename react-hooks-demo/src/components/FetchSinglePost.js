import { useState, useEffect } from 'react'
import axios from "axios"

export const FetchSinglePost = () => {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {setPost(res.data)})
        .catch(err => console.log(err))
  }, [id])

  return(
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
