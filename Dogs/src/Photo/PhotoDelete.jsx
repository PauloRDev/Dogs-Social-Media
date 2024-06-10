import React from 'react'
import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../Api';
import useFetch from '../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja DELETAR a imagem ?')
      if (confirm) {
        const { url, options } = PHOTO_DELETE(id)
        const {response} = await request(url, options)

        if (response.ok) window.location.reload()
      }
  }

  const handleButton = loading 
    ?  <button className={styles.delete} disabled>Deletar</button> 
    :  <button onClick={handleClick} className={styles.delete}>Deletar</button> 

  return (
    <>
      {handleButton}
    </>
  )
}

export default PhotoDelete
