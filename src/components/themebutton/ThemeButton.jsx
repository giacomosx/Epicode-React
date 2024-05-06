import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actualTheme, toggleTheme } from '../../redux/themeSlice'

const ThemeButton = ({variant}) => {

  const isDark = useSelector(actualTheme)

  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(toggleTheme())} className={`${variant} btn text-white p-0 fs-5 `}>{isDark ? <ion-icon name="moon"></ion-icon> : <ion-icon name="sunny"></ion-icon>}</button>
  )
}

export default ThemeButton