import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "../actions/actions";

const reducers = (state, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            console.log(action.items)
            return {
                ...state,
                items: action.items
            }
        
        case ADD_TO_CART:
            let itemExisted = false;
            let newCartItems = [...state.cartItems];
            for(let item of newCartItems){
                if(item.id == action.item.id){
                    item.quantity += 1;
                    itemExisted = true;
                    break;
                }
            }
            if(!itemExisted){
                newCartItems = [...state.cartItems, {...action.item, quantity: 1}];
                }
            return {
                ...state,
                cartItems: newCartItems
            }
        
        case REMOVE_FROM_CART:
            let itemsInCart = [...state.cartItems];
            for(let item of itemsInCart){
                if(item.id == action.cartItemId){
                    if(item.quantity > 1){
                        item.quantity -= 1;
                    } else if(item.quantity == 1){
                        let index = itemsInCart.indexOf(item);
                        itemsInCart.splice(index, 1);
                    }
                }
            }
            return {
                ...state,
                cartItems: itemsInCart
            }

        case ADD_TO_COMPARE:
            let itemsToCompare = [...state.compareItems];
            if(itemsToCompare.length == 3){
                console.log("can compare only 3 items at a time")
            } else {
                itemsToCompare.push(action.item);
            }
            return {
                ...state,
                compareItems: itemsToCompare
            }

        case REMOVE_FROM_COMPARE:
            let compareItems = [...state.compareItems];
            if(compareItems.length == 0){
                console.log("no items to compare")
            } else{
                for(let item of compareItems){
                    if(item.id == action.compareItemId){
                        let index = compareItems.indexOf(item);
                    compareItems.splice(index, 1);
                    }
                }
            }
            return {
                ...state,
                compareItems: compareItems
            }
        default:
            return state
    }
}

export default reducers