import React, { useReducer, useState } from 'react'

//counter값 넘길 때 useState와 reducer로 변경해서 넘겨볼 것. -> 이후 더 심화
//간단한건 state로 복잡한건 reducer로

function ReducerEx() {
    // //카운트 관리 - state ver
    // const [count, setCount] = useState(0);
    //count : 담기는 값, setCount : 변경되는 값
    // const countPlus = () => {
    //     setCount((prev) => prev+1);
    // }
    // const countMinus = () => {
    //     setCount((prev) => prev-1);
    // }


    //reducer ver
    //const [state, dispatch] = useReducer(reducer, init); 아래에다 만들어야지 위에걸 참조해서 사용할 수 있음
    // state : 상태값을 가질 변수
    // dispatch : 상태값을 변경하기 위해 일어나는 이벤트다.
    //useReducer(reducer, init)에서
    // reducer : reducer함수 자체를 의미한다.
    // init : 초기값을 의미한다. (useState(0)에서 0과 같음)

    // init값을 알 수 없으니 만들어야함. reducer도 만들어 줘야 함(함수로)
    const init = {count : 0};

    const reducer = (state, action) =>{ //state와 action을 받아온다.
        switch(action.type){
            case 'countPlus' : 
                return { count: state.count + 1}; //action.type이 'plus'면
            case 'countMinus' : 
                return { count : state.count -1};
        }
    }
    const [state, dispatch] = useReducer(reducer, init);
    // state : 상태값을 가질 변수
    // dispatch : 상태값을 변경하기 위해 일어나는 이벤트다.
    //useReducer(reducer, init)에서
    // reducer : reducer함수 자체를 의미한다.
    // init : 초기값을 의미한다. (useState(0)에서 0과 같음)
    
    return (
        // state ver
        // <div>
        //     count : {count} <br/>
        //     <button onClick={countPlus}>+</button>
        //     <button onClick={countMinus}>-</button>
        // </div>

        //reducer ver
        <div>
            count : {state.count} <br/>
            <button onClick={() => dispatch({type : 'countPlus'})}>+</button>
            <button onClick={() => dispatch({type : 'countMinus'})}>-</button>
        </div>
    )
}

export default ReducerEx

