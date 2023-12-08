import React from 'react'
import styled, {css, keyframes} from 'styled-components'



function ScItem() {
    return (
        //하나의 태그 이름을 내가 작성할 컴포넌트 이름으로 작성하면 된다. 
        <Container className='item'>
            <ButtonItem sub>버튼</ButtonItem> {/*sub */}
            <ButtonItem fontColor={'orange'}>버튼</ButtonItem>
            <ButtonItem>버튼</ButtonItem>
            <ButtonItem fontColor={'coral'}>버튼</ButtonItem>
            <ButtonItem>버튼</ButtonItem>

            <Box bgColor={'aqua'}>box</Box>
            <Circle bgColor={'pink'}></Circle>
        </Container>
    )
}

export default ScItem

//div태그에다 styled뭐시기를 이용해서 ... Container 안에는 div가 있는거..?
const Container = styled.div`
    display: flex;
    max-width: 1024px;
    background: lightgray;
    padding: 12px;
    margin: 0px auto;
`

const ButtonItem = styled.button`
    background: aqua;
    width: 200px;
    height: 50px;
    border: solid 1px black;
    cursor: pointer;
    opacity: 0.5;
    transition: 500ms;

    //직접적으로 선택자에게 받아올 수 있음
    //props : 상위객체에게 전달받은
    //props의 fontColor를 받아온다. 
    color: ${(props) => props.fontColor}; 
    ${(props) => props.sub && css `background: pink`}; 
    //props에 sub가 있으면 css(백그라운드 컬러 변경)
    //css를 조건부로 넘겨줄때 css를 체크하는 메서드다.
    //css는 styled-components에서 css를 따로 import해야한다.
    
    //sass의 문법
    &:hover{
        opacity: 1 //hover시 opacity:1 
    };
`

const Box = styled.div`
    width: 200px;
    height: 200px;
    background: ${(props)=>props.bgColor};
`

const CircleAni = keyframes`
    25%{
        background: lightcyan;
    }
    50%{
        background: lightsalmon;
    }
    75%{
        background: lightsteelblue;
    }
    100%{
        background: lightgoldenrodyellow;
    }
` 
//CircleAni먼저 선언해야 함

//styled.div`` : 값을 넣으려고?하는 것
//styled(Box)`` : 참조해서 원하는 값 추가하려고, Box의 값을 받아오는 ...
const Circle = styled(Box)`
    border-radius: 100%;
    animation: ${CircleAni} 5000ms infinite; 
    //애니메이션이름, duration, conunter? 
    //애니메이션 기능은 import를 추가해야 한다. (keyframes)
`

