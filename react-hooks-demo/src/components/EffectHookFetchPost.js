import axios from 'axios'
import { useEffect, useState } from 'react'

export const EffectHookFetchPost = () => {

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then(res => {
        setPost(res.data)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setLoading(true)
        setError('Something went wrong')
      })
  }, [])

  return(
    <div>
      <h1>{ loading ? 'Loading' : post.title }</h1>
      <h1>{ error ? error : null }</h1>
    </div>
  )
}
