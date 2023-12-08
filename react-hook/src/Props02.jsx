import React from 'react'

function Props02({name, local, job, age}) {
    /* 비구조와 할당 방법( 객체로 받아오지 않고 하나하나 따로 받아오겠다.)*/
    return (
        <div>
            <p>안녕하세요 저는 {name}입니다.</p>
            <p>사는 곳은 {local}입니다.</p>
            <p>직업은 {job}입니다.</p>
            <p>나이는{age}입니다.</p>
        </div>
    )
}

export default Props02
