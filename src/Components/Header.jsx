import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`headerdiv container text-center ${styles.header} '`}>
        Weather
    </div>
  )
}

export default Header