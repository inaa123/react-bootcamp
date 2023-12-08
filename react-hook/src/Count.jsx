import React, { useState } from 'react'
import CountItem from './component/CountItem'

function Count() {
    //버튼을 누르면 값이 1씩 추가되는 함수를 생성한다.
    //카운트의 값이 10을 넘으면 up을 그 이하면 down을 출력한다.
    //값을 전달해줄 것(CountItem으로)

    const [count, setCount] = useState(0) //useState에 값을 넣으면 기본값(0)을 설정할 수 있다.
    const btnClick = () => {setCount((prev) => prev+1)};
    //prev라는 매개변수는 이전 값을 담는 매개변수의 역할
    /*
    prev라는 매개변수를 사용해서 count를 업데이트 하는 이유
    prev란 매개변수의 역할 :(prev - 이름은 상관없음)
    - 값이 업데이트가 되어서 리렌더링을 하는 시점에서 가장 최근에 업데이트한 값을 가지고 있게 된다. (0을 넣는 순간도 리랜더링이라 본다.)
    prev를 사용하지 않고 state를 직접적으로 업데이트할 경우에는 과거의 값(초기의 값을 포함해서 업데이트된 값 모두를 의미한다.) 를 기억하고 사용할 수 있다.(되돌아갈 수도 있다..)
        (ex) 0 - 10 : prev는 9만 기억, state는 0 - 10까지 모두 기억하고 있음?, 
    prev를 사용하지 않고 바로 state의 값을 업데이트 할 경우, 메모리 관련해서 누락되는 버그 발생할 수 있다라고 명시하고 있음.()

    복잡한 구성 요소에서는 직접 업데이트 보다는 prev를 통한 업데이트를 권장한다.
    매개변수를 사용하는 것이 정확하고, 안전하고, 안정적인 접근 방식이다.
    (prev를 사용하는 이유 끝 ----)
    
    */
    return (
        <div>
            {/*totalNum: 현재값count와 삼항연산자(카운트가 계속 올라갈 때, 업,다운 출력할 조건) */}
            totalNum : {count}{count > 10 ? ' up' : ' down'}
            <CountItem totalNum = {count} onClick={btnClick} /> {/*totalNum과 onclick이벤트를 CountItem에 넘겨준다.*/}
            {/* <button onClick={countEvent}>클릭!</button> -> 전달 */}
        </div>
    )
}

export default Count
