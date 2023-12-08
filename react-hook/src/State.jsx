

//function(파일명과 똑같아야 함)을 기본값(default)으로 밖으로 보낸다.(export)
// export default function State(){ 
//     return(
//         <>
        
//         </>
//     )
// }

//rsc 자동완성 -> react/redux어쩌구 snippetes

import React, { useState }  from "react" 
import ChildState from "./ChildState"
function State(props) {
    /*
    hook
    확장기능, 확장형 프로그램 

    리액트는 클래스형과 함수형 컴포넌트로 구분을 한다.
    옛날 버전에서는 함수형을 메인으로 사용하면서 값의 변경이나 라이프 사이클을 사용할 때에는 클래스형 컴포넌트를 구분해서 사용해야 했다.

    클래스 컴포넌트의 단점은 코드가 너무 복잡하고, 재활용이 안된다는 것이다.
    단점을 보완해서 만든 게 hook이란 개념이다.

    함수형 컴포넌트에 클래스형 컴포넌트의 기능을 사용할 수 있게 해주는 일종의 확장기능이다.
    대표적으로 useState, useEffect, useReducer가 있다.(hook은 보통 앞에 use가 붙는다.)

    useState
    값을 저장하거나 변동해야 하는 객체에 주로 사용하며, 이벤트 요소와 함께 사용할 수 도 있다.
    보통 컴포넌트에서 전달받아온 값을 state라 한다.
        props라는 기능도 컴포넌트에 어쩌구저쩌구
        useState와 비슷하지만 기본적으로 내장되어 있는 기능
    단순히 값을 받아오기만 하는 경우 Props를 사용하고, 값을 변경해야 될 때에는 state를 사용해야 한다.
    props : 읽기전용, 값 참조만
    useState : 값 변경할 때

    index는 출력하는 용 상위컴퍼넌트가 하위컴퍼넌트에 전달해줌
    */

    // const changeName = () => {
    //     props.name = "lee"; 
    // }
    //props가 아닌 state로 전달(state는 원래 있는 초기값, 변경될 값 변수 두개(이름은 연결이 되는게 좋음)가 있어야 함)
    const [name, setName] = useState('park'); //name : 초기값, setName = 변경될 값 / useState는 
    console.log(name);
    console.log(setName);

    return (
        <div>
            {/* <p>이름 : {props.name}</p>
            <button onClick={changeName}>클릭!</button> */}
            {/* <ChildState name = 'park' /> name이 고정값이기 때문에 변경되지 않음*/}
            <ChildState name = {name} /> {/*바뀐 name다시 넘겨줌?*/}
            <button onClick={() => setName('lee')}>클릭!</button>
        </div>
    )
}

export default State




