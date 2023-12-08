import React, { useState } from 'react'

function CountItem({totalNum, onClick}) { //props로 여러개 받아온다.
    //Count에서 전달 받은 값을 출력해 줄 것
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}<span>/{totalNum}</span></p> {/*totalNum은 Count에서 받을 것*/}
            <button onClick={() => {
                setCount((prev) => prev + 1); 
                onClick();
            }}>클릭!</button>
        </div>
    )
}

export default CountItem

