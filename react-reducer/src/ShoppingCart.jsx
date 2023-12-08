import React, { useReducer } from 'react'
import { cartReducer, init } from './CartReducer';

function ShoppingCart() {

    const items = [
        {id : 1, name : 'item1', price: 50000},
        {id : 2, name : 'item2', price: 150000},
        {id : 3, name : 'item3', price: 580000},
        {id : 4, name : 'item4', price: 40000},
        {id : 5, name : 'item5', price: 90000},
    ]

    const [state, dispatch] = useReducer(cartReducer, init);

    const addItemCart = (product) => {
        dispatch({type: 'add-item', pay : product})
    }

    const removeItemCart = (product) => {
        dispatch({type:'remove-item', pay : product})
    }
    return (
        //카트 영역에 제품 추가
        <div>
            <h1>아이템 리스트</h1>
            <ul>
                {/* map((el) => ()O {}X , 중괄호를 쓰면 객체로 인식되기 때문에 아무 값도 받아올 수 없다. ()소괄호를 쓴다.*/}
                {items.map((el)=>(
                    <li key={el.id}>
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                        <button onClick={() => addItemCart(el)}>장바구니 담기</button>
                    </li>
                ))}
            </ul>

            <h1>카트 리스트</h1>
            {state.items.map((el) => (
                <div key={el.id}>
                    <p>{el.name} : {el.price}
                    <button onClick={() => removeItemCart(el)}>장바구니 삭제</button>
                    </p>
                </div>
            ))}
            <p>------------------------------------</p>
            <p>Total Items : {state.totalItems}</p>
            <p>Total Amount : {state.totalAmount} </p>
        </div>
    )
}

export default ShoppingCart
