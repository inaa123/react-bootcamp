import React, { createContext } from 'react'
import ColorModeChild from './ColorModeChild'
import ColorModeChild02 from './ColorModeChild02'

export const ThemeContext = createContext();//다른 컴포넌트로 내보내야 하기 때문에 export해야함
//ThemeContext에 초기화된createContext()를 만들어 놓겠다.
function ColorMode() {
    /*
    colorTheme = dark라는 값을 넘겨준다.

    return엔 ColorModeChild를 출력해줄건데, 전달받을 theme는 colorTheme이다.
    */
    const colorTheme = 'dark'

    return (
        <div>
            {/*context가 감싸고있는 컴포넌트에는 전부 다 value값이 전달됨*/}
            <ThemeContext.Provider value={colorTheme}>
                <ColorModeChild/> 
                <ColorModeChild02/> 
            </ThemeContext.Provider>
            
            {/* <ColorModeChild theme={colorTheme}/> */}
            
        </div>
    )
}

export default ColorMode
