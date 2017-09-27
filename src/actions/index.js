// all action store here
export function selectBook(book){
    // action - SelectBook is an action create and need to return and action, 
    // an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        //payload
        payload : book
    }; 
}
