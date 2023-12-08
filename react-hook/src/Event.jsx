import React from 'react'

function Event() {
    /*
    리액트에서 이벤트 처리하기
    기존 이벤트 명에서 앞에 on을 붙여서 사용

    onClick = 클릭이벤트
    onChange = input(입력하는 요소) 컨텐츠의 내용이 변경되는 경우(실시간 : 상의 => ㅅ ㅏ ㅇ ㅇ ㅡ ㅣ )
    (ex 검색창, 아이디, 비번 입력)
    onSubmit = 폼에 입력된 데이터를 전송(button submit이랑 다름)
    (html에서는 버튼에 onSubmit을 사용하지만 리액트에서는 form태그에 사용한다.)
    onFocus = 포커스 인 이벤트
    onBlur = 포커스 아웃 이벤트
    onMouseMove : 마우스가 움직이는 이벤트

    1. 이벤트 문법에는 카멜 기법을 사용한다.
    onClick = {clickevent} = x
    onClick = {clickEvent} = o

    2. 문자열이 아닌 함수형으로 이벤트를 전달한다.
    onClick = clickEvent() = x
    onClick = {clickEvent} = o

    3. 리액트에서는 요소의 기본이벤트를 막기 위해 return false를 사용할 수 없다. 반드시 기본이벤트를 막는 방법은 e.preventDefault()만 사용할 수 있다.
    
    */
    return (
        <div>
            
        </div>
    )
}

export default Event
