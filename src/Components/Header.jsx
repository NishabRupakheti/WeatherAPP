import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`headerdiv container text-center ${styles.header} '`}>
        Weather app
    </div>
  )
}

export default Header