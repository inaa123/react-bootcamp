
//export 내보낸다.(다른 곳에서 이 함수를 참조할 수 있다.-> shoppingcart에서 쓸 것)

export const init = {
    items : [], //카트에 담기는 상품을 배열로 받아오기 위해 초기값을 빈 배열로 선언한다.(여러개의 상품 동시에 담아야 함.)
    totalItems : 0, //전체 선택한 아이템의 전체 갯수
    totalAmount : 0, //전체 아이템의 가격(총 가격)
}

export function cartReducer(state, action) {
    switch(action.type){
        case 'add-item' :  //추가, 리스트에 품목 늘리기
            const ownIndex = state.items.findIndex((item)=> item.id === action.pay.id)//소유여부
            if(ownIndex >= 0){
                const updateItems = state.items.map((item, index) => 
                index === ownIndex ? {...item, quantity : (item.quantity || 1 ) +1} : item)
                // {console.log(state.quantity)}
                return { //버튼 눌러서 아이템 추가하면 기존의 것에서 계속 추가되는 방식(단순 변경아님)
                    ...state, //기존 값 배열을 업데이트해준다?
                    items : updateItems, //[...state.items, action.pay], //items와 가격들 들어옴
                    totalAmount : state.totalAmount + action.pay.price,
                    
                }
            } else{
                return{
                    ...state,
                    items : [...state.items, {...action.pay, quantity : 1}],
                    totalItems : state.totalItens + 1,
                    totalAmount : state.totalAmount + action.pay.price
                }
            }

        case 'remove-item' : //삭제
            const itemIndex = state.items.findIndex((item)=> item.id === action.pay.id);//무엇을 삭제할지 모르니까 index알아낸다.
            if(itemIndex < 0){
                return state
            }
            const updateItems = state.items.filter((_, index) => index !== itemIndex);
            const removeItem = state.items[itemIndex];
            return {
                ...state,
                items : updateItems, //updateItems
                totalItems : state.totalItems -1,
                totalAmount : state.totalAmount - (removeItem.price * removeItem.quantity) //removeItem
            }
        case 'update-item' : //기존 변경
            const updateItemIndex = state.items.findIndex((item) => item.id === action.pay.id)
            const updateItem = state.items[updateItemIndex];
            const itemUpdateQu = {...state.itemUpdate, quantity : action.pay.quantity}
            const itemUpdateList = state.items.map((el, index) => index === updateItemIndex ? updateItem : el)
            return {
                ...state,
                items : itemUpdateList,
                totalAmount : state.items.reduce((total, item) => total + item.price * item.quantity)
            }
    }
}