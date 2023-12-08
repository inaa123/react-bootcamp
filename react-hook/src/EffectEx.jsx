import React, { useEffect, useState } from 'react'

function EffectEx() {
    /*
    useEffect와 useState를 이용해서 카운트 다운을 만든다.
    1. useState에 초기값을 설정하고 useEffect로 시간을 차감한다.
    2. 0초가 되면 카운트다운이 멈추도록 설정한다.
    */

    const [countNum, setCountNum] = useState(5);
    const [itemNum, setItemNum] = useState(0);

    useEffect(() => {
        const countDown = () => {
            // if(countNum > 0){
            //     setCountNum((prev) => prev - 1)
            // }
            setCountNum((prev)=>(prev > 0 ? prev - 1 : prev))
        }
        const timer = setInterval(countDown, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [countNum])

    const onCountClick = () => {
        setItemNum((prev) => prev+1)
    }
    return (
        <div>
            <p>{countNum}</p>
            {countNum === 0 && 
                <p>카운트다운이 종료되었습니다.</p>
            }
            <p>{itemNum}</p>
            <button onClick = {onCountClick}>클릭!</button>
        </div>
    )
}

export default EffectEx
