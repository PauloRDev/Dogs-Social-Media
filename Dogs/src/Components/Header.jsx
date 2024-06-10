import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Usuario from '../Assets/usuario'
import { UserContext } from '../UserContext'
import Paw from '../Assets/Paw'

const Header = () => {
  const { data } = React.useContext(UserContext)

  return (
    <>
      <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='Dogs - Home'>
          <Paw />
        </Link>

          {data ? (
            <Link className={styles.login} to="/conta">
              {data.nome}
            <Usuario />
           </Link>
          ) : <Link className={styles.login} to="/login">
          Login / Criar 
           <Usuario />
        </Link>}
      </nav>
    </header>
    </>
  )
}

export default Header
