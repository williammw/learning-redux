// state argument is not appication state, only the state
// the reducer is responsible for
export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}