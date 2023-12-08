import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    /*
    useRef
    요소들을 랜더링 하지 않고 변경가능한 값을 저장하는 hook

    1. dom요소에 직접적으로 접근하는 목적이다.
    2. 변경시 랜더링되지 않는 변경 가능한 값을 유지하는 목적이다.

    사용법
    useRef 값을 초기화 후 사용한다.
    current로 값이나 객체를 연결하면서
    (값을 넣기 전에 변수에 초기화된 useRef를 선언한 후 current로 값이나 객체를 연결하면서)
    */
    //case01. 객체에 직접적으로 접근해서 선택하는 방법
    // const ref = useRef(); // 선택할 값을 선택하기 전에 빈 값으로 초기화. ()안에 null을 넣거나 비어두면 됨
    // console.log(ref);

    // //
    // useEffect(() => {
    //     ref.current.focus()
    //     console.log(ref)
    // }, [])

    //case02. 상태값 관리 
    //useState버전
    // const [val, setVal] = useState('');
    // const [num, setNum] = useState(0);

    // const onCountNum = () => {
    //     setVal(`${num}`);
    //     setNum(num + 1);
    // }

    //ref버전
    const [num, setNum] = useState(0);
    const ref = useRef('');

    const onCountNum = () => {
        //클릭을 하면 ref의 current에 num을 연결하고, 나중에 ref의 current를 출력한다.
        ref.current = `${num}`;
        setNum(num + 1);
    }
    return (
        <div>
            {/* <input ref={ref}></input> */}
            <button onClick={onCountNum}>1 더하기</button>
            {/* <p>{num}</p> */}
            <p>{ref.current}</p> 
            {/*ref버전과 useState버전의 다른점
            ref버전은 첫 화면에서 누가 선택된지 모르기 때문에 버튼을 누르면 값이 나옴(0부터)*/}
        </div>
    )
}

export default UseRef
