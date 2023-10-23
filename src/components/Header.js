import React from 'react'

const Header = ({handleDarkMode}) => {
  return (
    <div>
      <div className='header'>
        <h1>Notes</h1>
        <button onClick={()=>handleDarkMode(
            (previousDarkMode) => !previousDarkMode

        )} className='save'>Toggle Mode</button>
      </div>
    </div>
  )
}

export default Header
