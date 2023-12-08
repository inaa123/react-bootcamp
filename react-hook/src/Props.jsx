import React from 'react'

function Props(props) { //props : 매개변수 역할을 해준다.
    console.log(props); //Object형식
    /*
    Props = property의 약자
    상위 컴포넌트가 하위 컴포넌트에게 값을 전달할 때 사용하는 값이다.
    전달받은 값은 변경할 수 없다.(단점?. 오직 전달만 받을 수 있음)
    숫자를 작성할 때에는 ''와 {}를 구분해서 사용한다.
    '40'은 스트링이기 때문에 연산을 할 수 없다.
    {40}은 숫자열로 보기 때문에 연산이 가능하다.
    문자열 외에는 모두 {}로 감싸면 된다.
    props를 가져올 때에는 객체형식(Object)로 저장된다.

    props는 읽기 전용으로만 불러오기 때문에 값을 변경하거나 어떠한 조작도 할 수 없다.(단순 참조기능)

    

    예를 들어 사용해보기 위해 상위 컴포넌트를 index.js로 본다/

    */
    return (
        <div>
            <p>안녕하세요 저는 {props.name}입니다.</p>
            <p>저는 {props.local}에 살고 있습니다.</p>
            <p>직업은 {props.job}입니다.</p>
            <p>나이는 {props.age}살 이에요.</p>
        </div>
    )
}

export default Props
