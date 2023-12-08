import React, { useContext } from 'react'
import {ThemeContext} from './ColorMode'

function ColorModeChild02() {
    //  context에서 ColorModeChild02({theme})에도 {theme}빼도됨

    const theme = useContext(ThemeContext)
    return (
        <div>
            <p>{theme}</p>
        </div>
    )
}

export default ColorModeChild02
