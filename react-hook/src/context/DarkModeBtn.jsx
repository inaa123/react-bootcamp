import React, { useContext } from 'react'
import { ThemeContext } from './DarkMode';

function DarkModeBtn() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    const darkMode = {
        backgroundColor : theme === 'light' ? 'white' : 'black',
        color : theme === 'light' ? 'black' : 'white'
    }
    return (
        <div style={darkMode}>
            <h1>컬러모드</h1>
            <button onClick={toggleTheme} style={{background : theme === 'light' ? 'black' : 'white'}}>
                {theme === 'light' ? 'dark' : 'light'}
            </button>
        </div>

    )
}

export default DarkModeBtn
