import React from 'react'

function ChildState(props) { //state에서 전달시킨 값 : props
    const changeName = () => {
        props.name = 'lee';
    }
    
    return (
        <div>
            <p>이름은 : {props.name} </p>
            {/* <button onClick={changeName}>클릭!</button> */}
        </div>
    )
}

export default ChildState
