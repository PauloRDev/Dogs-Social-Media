import React from 'react'
import Send from '../Assets/Send'
import useFetch from '../Hooks/useFetch'
import Error from '../Components/Helper/Error'
import { COMMENT_POST } from '../Api'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('')
  const { request, error } = useFetch()

  const handleSubmit = async e => {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)

    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea className={styles.textarea}
      id="comment"
      name="comment"
      placeholder="Comment..."
      value={comment} 
      onChange={({target}) => setComment(target.value)}/>
    <button className={styles.button}>
      <Send />
    </button>
    <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm
