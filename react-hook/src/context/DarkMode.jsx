import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();
function DarkMode({children}) {
    //현재값이 바뀜(light(기본값) -> dark)
    const [theme, setTheme] = useState('light'); //컬러모드의 기본 설정 값

    //toggleTheme 함수 만들기
    const toggleTheme = () => {
        //버튼 누르고 light/dark모드로 전환하기
        //현재 theme이 light면 dark로, light가아니면 light실행
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    return (
        <div>
            {/* provider : 값을 전달해주는(보내주는)역할. theme과 toggleTheme란 값을 넘겨준다.*/}
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default DarkMode
