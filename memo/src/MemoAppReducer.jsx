import React, { useReducer } from 'react'

function MemoAppReducer() {
    //리듀서로 메모장 만들기
    /*
    - 초기값 설정

    - 실행함수 작성(switch, case값은 대문자로 설정)

    - const useReducer로 초기값과 실행함수 불러오기
    */

    const init = {
        //state처럼 모든 값의 초기값을 설정
        memo : '',
        updateMemo : [],
        //updateMemo와 memo는 객체 -> state처럼 따로 X ->그래서 state.memo
        itemIndex : -1,  
        //index값에 따라 새 메모를 저장하거나 기존 메모를 수정하는 데 사용할 매개변수다.(다른값안됨, -1만 가능!)
        //다른 숫자는 정상적인 순번을 출력하지만, -1은 없는 인덱스 번호를 출력할 때 나오는 오류다.
        // -1 : 인덱스를 불러오지 않은 것!
        
    }

    function memoReducer(state, action) {
        //dispatch(이벤트 일으키는 메서드)로 실행했을 때 switch문에 대한 type(dispatch의)을 실행해서 return문 반환
        switch(action.type){
            case 'SET_MEMO': //case문은 대문자로 만드는 것이 암묵적인 룰이다.
                return{
                    ...state,
                    memo : action.payload
                    //payload = state를 가지오기 위한 매개변수, 암묵적인 룰
                    /*
                    reducer의 문법중에서 스프레드 연산자는 현재 상태에서 새 객체에 복사해주는 역할을 한다.
                    스프레드를 이용해 객체를 복사해 놓으면 명시적으로 변경되는 부분이 업데이트 되지 않은 상태를 유지해준다.
                    reducer에서는 상태를 직접 변경하지 않고, 업데이트 되는 속성으로 객체를 생성하는 방법을 사용하도록 한다.(데이터 관리하기 좋음)
                    
                    리액트 자체에서 스프레드 연산자는 상태객체를 직접 수정하지 않고,
                    상태 객체를 직접 제어하지 않으며, 변경되는 객체의 상태를 제외한 나머지 변경되지 않는 객체들을 보호(유지)할 수 있다.(바뀔애만 바뀌게할 수있다.)
                    => 데이터 관리하기 좋음

                    *reducer뿐만 아니라 리액트 자체에서 스프레드 연산자를 사용하도록 한다. (상태값 직접 조절할 수 없기 때문 = dom 직접 선택할 수 없다.)
                    
                    */
                }
            case 'SAVE_MEMO' :
                return{
                    ...state,
                    updateMemo : [...state.updateMemo, state.memo],
                    memo : ''
                }
            
            case 'DEL_MEMO' :
                return{
                    ...state,
                    updateMemo : state.updateMemo.filter((el, index) => index !== action.payload),//업데이트 새로 한다.(state의 updateMemo를 다시 불러서 filter(걸러준다.) -> updateMemo의 index와 action의 payload(index)를 비교해서 일치하지 않은 것을 재정리한다.

                    //현재 저장되어 있는 메모 중에서 넘겨받은 index와 SAVE_MEMO에 있는 index와 비교해야 한다.
                    //내가 전달 받은 index 번호와 List안에 있는 index번호가 서로 일치하지 않는 요소만 정리하도록 한다.
                    //해당 값을 걸러주는 array 메서드 : filter 
                }

            case 'EDIT_MEMO' :
                return {
                    ...state,
                    memo : state.updateMemo[action.payload],
                    itemIndex : action.payload,
                    //memo는 state updateMemo중에서 action.payload(index)로 받아온(해당 index를 불러서) 요소를 불러온다.
                    
                    //저장하기 누르면 새로 리스트에 추가됨 -> 불러온건지 아닌건지를 구분해야 함. 안그러면 새로운 list에 저장하려고 함.
                    //->구분하기 위한 값 필요 : 기본값에 itemIndex 설정하고 -1인 순번을 넣으면 
                }
            
            case 'SAVE_EDIT_MEMO' :
                const editMemo = [...state.updateMemo];
                editMemo[state.itemIndex] = state.memo
                return{
                    ...state,
                    updateMemo : editMemo,
                    memo : '',
                    itemIndex : -1,
                }
        }
    }

    const [state, dispatch] = useReducer(memoReducer, init);

    

    const onChangeEvent = (e) => {
        dispatch({type : 'SET_MEMO', payload : e.target.value})
    } //action이 dispatch인가?

    const onClickEvent = () => {
        //dispatch({type : 'SAVE_MEMO'})
        if(state.itemIndex === -1){
            dispatch({type: 'SAVE_MEMO'})
        } else{ // case: 'EDIT_MEMO'에서 itemIndex : action.payload로 설정했기 때문에 itemIndex가 -1이 아님!
            dispatch({type: 'SAVE_EDIT_MEMO'})
        }
        //가지고 있는 메모인지 확인하여 새로-저장할지 기존-저장할지
    }

    const onDelete = (index) => {
        dispatch({type : 'DEL_MEMO', payload : index}) //paylod로 index를 받아와야 한다.
    }

    const onEdit = (index) => {
        dispatch({type : 'EDIT_MEMO', payload : index})
    }


    return (
        <div>
            <h1>메모장</h1>
            <input type='text' value={state.memo} onChange={onChangeEvent} />
            {/*저장되는 값 memo, 실시간으로 저장되는건 setMemo? */}
            <button onClick={onClickEvent}>저장하기!</button>

            <h2>메모장 리스트</h2>
            <ul>
                {state.updateMemo.map((el, index ) => (
                    <li>
                        {index}.{el}
                        <button onClick={() => onDelete(index)}>삭제하기</button>
                        {/* 버튼 클릭시 onDelete 함수에 index를 전달해 줘야함  */}
                        <button onClick={() => onEdit(index)}>수정하기</button>
                         {/* 버튼 클릭시 해당 index의 값이 input에 다시 불러와야 함 */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MemoAppReducer
