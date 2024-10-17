import { useState, useEffect } from 'react'
import axios from 'axios'

export const FetchSingleRecordOne = () => {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idByButtonClick, setIdByButtonClick] = useState(1)

  const handleButtonClick = () => {
    setIdByButtonClick(id)
  }
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
        .catch(err => console.log(err.message) )
  }, [idByButtonClick])

  return(
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleButtonClick}>Fetch Post</button><br />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
