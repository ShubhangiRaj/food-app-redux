export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_COMPARE = "ADD_TO_COMPARE";
export const REMOVE_FROM_COMPARE = "REMOVE_FROM_COMPARE";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// Returns ADD_TO_CART action object 
export const addToCart = ( item ) => {
    return { type: ADD_TO_CART, item: item }
}

// Return REMOVE_FROM_CART action object
export const removeFromCart = ( cartItemId ) => {
    return { type: REMOVE_FROM_CART, cartItemId: cartItemId }
}

// Returns ADD_TO_CART action object 
export const addToCompare = ( item ) => {
    return { type: ADD_TO_COMPARE, item: item }
}

// Return REMOVE_FROM_CART action object
export const removeFromCompare = ( compareItemId ) => {
    return { type: REMOVE_FROM_COMPARE, compareItemId: compareItemId }
}

export const fetchProducts = ( jsonResponse ) => {
    console.log(jsonResponse);
    return { type: FETCH_PRODUCTS, items : jsonResponse }
}

