import React from 'react'
import './Item.css' //외부 파일 연결해줘야 함.
import Button from '../components/Button'
import Button02 from '../components/Button02'

function Item() {
    /*
    직접선언방식, 변수로 선언하는 방식
    */
    const text={
        color : 'white',
        fontSize : '30px'
    }

    return (
        <div className='container'>
            <h1 className='title'>
                리액트 기본 css작성 방식
            </h1>

            <p style={{
                fontSize : '40px',
                backgroundColor : 'coral',
            }}>
                안녕하세요 직접 스타일 방식
            </p>

            <p style={text}>변수로 선언하는 방식</p>
            <Button />
            <Button02 />
        </div>
    )
}

export default Item
