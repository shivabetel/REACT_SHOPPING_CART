const initialState = {
    items: []
}

export const filterReducer = (state = initialState, action) => {
   const { type, payload = {} } = action;

   switch(type){
       case 'UPDATE_FILTER': {
           return {
               ...state,
               items: payload
           }
       }
       default: 
       return state;
   }
}