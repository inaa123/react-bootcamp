import React from 'react'

function TailWindItem() {
    return (
        <div className='flex bg-red-100 p-3'> {/*클래스네임 직관적임. flex = display:flex를 넣겠다.*/}
            <div className='basis-32 bg-amber-200 p-3'>box</div>
            <div className='basis-32 bg-amber-200 p-3'>box</div>
            <div className='basis-32 bg-amber-200 p-3'>box</div>
            <div className='basis-32 bg-amber-200 p-3'>box</div>
            <div className='basis-32 bg-amber-200 p-3'>box</div>
        </div>
    )
}

export default TailWindItem
