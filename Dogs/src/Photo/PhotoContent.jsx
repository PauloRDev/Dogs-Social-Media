import React from 'react'
import styles from './PhotoContent.module.css'
import PhotoComments from './PhotoComments'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import PhotoDelete from './PhotoDelete'
import Image from '../Components/Helper/Image'

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext)
  const { photo, comments } = data

  const myPhoto = user.data && user.data.username === photo.author
  
  const dogAgePluralOrSingular = photo.idade === 1 
    ? photo.idade + ' ano' 
    : photo.idade + ' anos'

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
        </div>
        <div className={styles.details}>
          <div>
            <p className={styles.author}>
              { myPhoto
                ? <PhotoDelete id={photo.id} /> 
                : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              }
              <span className={styles.visualizacoes}>{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className={styles.attributes}>
              <li>{photo.peso} kg</li>
              <li>{dogAgePluralOrSingular}
              </li>
            </ul>
            </div>
          </div>
        <PhotoComments single={single} id={photo.id} comments={comments}/>
    </div>
  )
}

export default PhotoContent
