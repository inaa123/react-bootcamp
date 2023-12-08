import React from 'react'
import { useParams } from 'react-router-dom'

//itemList에서 클릭한 아이템에 대한 정보 담기게
function ItemDetail() {
    const {id} = useParams() //{id}란 값에 useParams를 초기화해서 넣는다.(useParams를 id에 넣어 사용할 것)
    //console.log(id); 클릭한 요소의 id값 넘어옴

    //useParams() : 리액트 라우터를 사용할 때 다른 곳에 있는 파라미터 정보(ex 클릭한 요소의 정보 등)를 활용해야하는 경우, 사용하는 리액트 라우터 구성요소다.
    // (클릭한 요소의 정보를 다른 곳에 넘겨줄 때, 정적인 페이지 이동에선 useParams 필요없지만 동적으로 값, 클릭한 요소의 아이디 값을 넘겨서 아이디에 들어있는 정보들을 그때마다 랜더링을 바꿔줘야할 때 클릭한 정보들을 받아오기 위함(useParams))
    // id값을 useParam으로 초기화?

    const item = {id : id, name: `item${id}`}
    return (
        <div>
            <h1>상품 디테일 페이지</h1>
            <p>{item.id}</p>
            <p>{item.name}</p>
        </div>
    )
}

export default ItemDetail
