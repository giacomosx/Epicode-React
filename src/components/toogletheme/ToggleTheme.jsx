import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const ToggleTheme = ({variant}) => {

    const {isDark, toggleTheme} = useContext(ThemeContext)

    useEffect(() => {
        isDark 
        ? document.body.classList.add('bg--light-black')
        : document.body.classList.remove('bg--light-black')
    }, [isDark])

  return (
    <button onClick={toggleTheme} className={`${variant} btn text-white p-0 fs-5 `}>{isDark ? <ion-icon name="moon"></ion-icon> : <ion-icon name="sunny"></ion-icon>}</button>
  )
}

export default ToggleTheme