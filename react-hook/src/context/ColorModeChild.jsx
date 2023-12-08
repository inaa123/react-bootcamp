import React from 'react'
import ColorModeChild02 from './ColorModeChild02';

function ColorModeChild() {
    //context를 사용하면 ColorModeChild({theme})에서 {theme}을 빼도 ㄱㅊ
    /*
    ColorMode에서 theme을 받아온다.
    */

   //console.log(theme); //theme을 전달받게되면
    return (
        <div>
            <p></p>
            <ColorModeChild02 />
            {/* <p>{theme}</p> */}
            {/* <ColorModeChild02 theme={colorTheme}/> colorTheme받아올 수 있는 구조가 아니기 때문에(자식요소가 아니라 자손이므로), colorTheme이아닌 {theme}으로 하여 계속 내려가고 내려가고 내려가야함.*/} 
            {/* <ColorModeChild02 theme={theme}/> */}
        </div>
    )
}

export default ColorModeChild
