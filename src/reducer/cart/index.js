const initialState = {
    products: []
}

export const cartReducer = (state = initialState, action ) => {

    const { type, payload } = action;
    switch (type) {
        case 'ADD_PRODUCT' : {
            return {
                ...state,
                products: [...state.products, payload]
            }
        }
        default: {
            return state;
        }
    }
}