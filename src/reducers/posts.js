const reducer = ( state= [], action) => {
    switch(action.type){
        case 'FETCH_ALL' :
            return action.payload;
        case 'FETCH_SUCCESS' :
            return [...state, action.payload];
        case 'UPDATE':
        case 'UPDATE_LIKE':
            return state.map((post) => post._id ===  action.payload._id ? action.payload : post);
        case 'DELETE':
            return state.filter((post) => post._id !== action.payload)
        default:
            return state;
    }
} 

export default reducer