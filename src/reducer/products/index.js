export const productsReducer = (state = {}, action ) => {
    const { type, payload = {} } = action;
    switch(type) {
        case 'FETCH_PRODUCTS' : {
            return {
                ...state,
                ...payload
            }
        }
        default: 
        return state;
    }

}