import React, { useEffect, useState } from 'react'

function Effect() {
    /*
    리액트를 다른말로 SPA (Single Page)라고 함
    html같은 것들을 MPA(Multiple Page)라고 함
    SPA, MPA -> 동작방식을 의미

    리액트는 페이지 이동해주는 것 없음 -> 같은 페이지 내에서 교체만 될 뿐(깜빡거리는거X)
    SPA는 깜빡거리는 (한페이지에서 컴포넌트 업데이트하는 방식으로)
    멀티플은 여러개 페이지로 이동하는 방식
    -----------------------------------

    useEffect()
    페이지가 랜더링 될 때 특정 작업을 실행하는 hook

    페이지가 랜더링 될 때의 의미
        - 컴포넌트가 처음 나타났을 때(마운트)
            페이지가 생성이 되면서 보여주는 구성요소(컴포넌트가 읽어서 렌더링 됐다는 의미 = 마운트 됐다고함)
        - 컴포넌트가 사라질 때(언마운트)
        -업데이트가 되어서 리랜더링이 되는 경우(props)
    
    사용법
        useEffect(() => {() => {
            실행 코드 값
            return () => {리턴 실행 코드}
        }}, 특정 배열값)
        effect의 구동 방식은 특정한 값이 변경되면 배열에 값을 담아서(특정배열값을 담아서) 변경해주는 방식이다.
        배열에 특정 값(변경할 값)을 넣게되면 그 값이 변경할 때에만 작동한다. 

        (특정배열값은 useEffect가 작동되는 시점이다.)
        배열값을 생략할 경우 - 모든 값이 변경될 때마다 실행된다. (기본값)
        빈 배열 []만 넣을 경우 - 최초 마운트시에만 실행된다.
        특정한 값이 있는 배열 [값] - 해당하는 값이 바뀔 때에만 실행된다.

        return문은 필수는 아니며 선택적 구문이다.
        - 효과가 재실행되기 전이나, 마운트가 해제되려고 할 때 실행되는 구문이다.
        - 이벤트 제거, cleartimeout 제거 용
            setTimeout에서 clear(초기화)해주지 않으면 계속 실행됐움 -> 이처럼 시간이 흘러가는 것들 초기화 시켜줘야 할 때
    */

    const [num, setNum] = useState(2);
    const [count, setCount] = useState(10);
    const [timeCount, setTimeCount] = useState(0);

    const onClick = () => {
        setNum(num * 2);
    }
    const onCountClick = () => {
        setCount(count * 2);
    }

    useEffect(() => {
        console.log(num);
    }) //[]넣으면 최초값 2만 출력, [num]넣으면 num이 바뀔때만 실행,  배열이 없으면 num, count 둘다 useEffect실행된다
    // 빈배열 : 어떤 값이든 마운트(업데이트)되면 실행, [] 마운트되는 시점만 실행, [num] num이 업데이트 될 때만 실행
    //리랜더링되면 useEffect실행 되는 것.

    useEffect(() => {
        console.log(count);
    })

    useEffect(() => {
        //useEffect안에 일정한 시간동안 반복되는 setinterval만들어 줌
        //배열을 넣지 않으면 바로 실행되지 않고 마운트간의 간격이 생기기 때문에(간격도 초로 인식되어 누적된 값이 한 번에 실행됨)
        // []를 넣으면 .... reactStrict때문에 2씩 증가된다.
        const timer = setInterval(() => {
            setTimeCount((prev) => prev + 1); //1초에 1씩 useEffect가 실행된다.
        }, 1000)
        return () => {
            clearInterval(timer); //useEffect실행될때마다(마운트될때마다) timer실행되고 clear끝난다. -> 이벤트가 누적되지 않도록 return문안에 이벤트 제거해준다.
        }
    }, [])
    return (
        <div>
            <p>{num}</p>
            <p>{count}</p>
            <p>{timeCount}</p>
            <button onClick={onClick}>클릭!</button>
            <button onClick={onCountClick}>클릭!</button>
        </div>
    )
}

export default Effect
