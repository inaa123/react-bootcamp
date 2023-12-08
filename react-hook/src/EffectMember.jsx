import React, { useEffect, useState } from 'react'

function EffectMember() {
    const [item, setItem] = useState([]); //빈배열
    const [check, setChecK] = useState(false); //기본값 : false, 비회원체크 : true, 회원:false

    useEffect(() => {
        //비동기 방식 데이터를 처리하는 메서드 : fetch, 
        //fetch 비동기방식은 public폴더 자동으로 인식하기 때문에 경로에서 public빼도 됨
        fetch(`data/${check ? 'no-' : ''}member.json`) //check가 true면 no-member.json, 아니면 member.json
            .then((res) => res.json())
            .then((data) => {setItem(data)})
            //console.log(item)
    }, [check])

    const onCheckEvent = () => {
        setChecK((prev) => !prev); //이벤트 발생 시 반대로 움직이게 true -> false, false -> true
        console.log(check);
    }

    return (
        <div>
            {/*onChange:상태가 바꼈는지 여부알려줌*/}
            <input type="checkbox" onChange={onCheckEvent}/>비회원체크 
            <ul>
                {item.map((el) => (
                    <li key={el.id}>
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EffectMember
