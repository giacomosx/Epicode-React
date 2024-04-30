import React from 'react'

const ThemeButton = ({variant}) => {

  const isDark = false

  return (
    <button className={`${variant} btn text-white p-0 fs-5 `}>{isDark ? <ion-icon name="moon"></ion-icon> : <ion-icon name="sunny"></ion-icon>}</button>
  )
}

export default ThemeButton