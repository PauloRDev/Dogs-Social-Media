import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import FeedIcon from '../../Assets/FeedIcon'
import Add from '../../Assets/Add'
import Stats from '../../Assets/Stats'
import Exit from '../../Assets/Exit'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'



const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    userLogout()
    navigate('/login')
  }

  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const {pathname} = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
    
  }, [pathname])

  const handleMobileMenuChange = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <>
      {
        mobile && <button aria-label="menu" 
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        onClick={handleMobileMenuChange}
        ></button>
      }

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive }`}>
        <NavLink to="/conta" end>
        <FeedIcon />
          {mobile && 'Minhas fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
        <Stats />
          {mobile && 'estatisticas'}
        </NavLink>

        <NavLink to="/conta/postar">
          <Add />
            {mobile && 'Adicionar Foto'}
          </NavLink>

        <button className={styles.exit} onClick={handleLogout}> 
          <Exit /> 
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
