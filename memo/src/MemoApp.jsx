import React from 'react'
import { useState } from 'react'

function MemoApp() {
    /*
    state로 메모장 관리
    1. 내용의 변경사항을 저장할 수 있는 state(초기값의 내용은 아무것도 없다가 작성되기 때문)

    2. 메모의 리스트를 저장할 수 있는 배열 형태의 state가 필요하다.
    (맨 처음엔 아무 리스트 없다가, 메모가 추가가 되면 배열(List)형태로 계속 추가되기 때문이다.)

    비어있는 텍스트 받아올 state, 배열을 받아올? state 2개 필요

    value값 받아오는 이벤트 = e.target.value

    */

    //memoApp = state 버전
    const [memo, setMemo] = useState('') //텍스트를 받아올 state (초기값 : 빈 문자열)
    const [updateMemo, setUpdateMemo] = useState([]) //메모의 리스트를 받아 올 state (초기값 : 빈 배열)

    const onChangeEvent = (e) => {
        setMemo(e.target.value);
    }

    const onClickEvent = () => { //클릭하면 updateMemo에 memo의 값이 담겨야 한다.
        setUpdateMemo([...updateMemo, memo]) //...updateMemo : updateMemo배열의 뒤에다 memo란 값을 추가해준다.
        //console.log(updateMemo);
        setMemo('') //클릭버튼누르면 input에 입력된 글자 없어지게
    }

    return (
        <div>
            <h1>메모장</h1>
            <input type='text' value={memo} onChange={onChangeEvent} />
            {/*저장되는 값 memo, 실시간으로 저장되는건 setMemo? */}
            <button onClick={onClickEvent}>저장하기!</button>

            <h2>메모장 리스트</h2>
            <ul>
            {/* {배열변수명(2.의 state).map(으로 뽑아내기)} */}
                {updateMemo.map((el, index ) => (
                    <li>{index}.{el}</li>
                ))}
            </ul>
        </div>
    )
}

export default MemoApp
