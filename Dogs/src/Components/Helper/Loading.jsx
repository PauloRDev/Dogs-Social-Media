import React from 'react'
import styles from './Loading.module.css'
import Bones from '../../Assets/Bones'

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <Bones />
      </div>
    </div>
  )
}

export default Loading
