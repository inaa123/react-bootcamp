import React, { useState } from 'react'


function stateEx() {
    const [num, setNum] = useState(2);
    const onCountClick = () => {
        setNum((prev) => prev * 2);
    }
    return (
        <div>
            <p>{num}</p>
            <button onClick={onCountClick}>클릭!</button>
            <button onClick={() => setNum(num * 2)}>클릭</button>
        </div>
    )
}

export default stateEx

