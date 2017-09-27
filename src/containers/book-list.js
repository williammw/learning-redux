import React,{Component} from 'react';
import { connect } from 'react-redux';
// action creator
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';
 class BookList extends Component{
  renderList(){
      return this.props.books.map((book) => {
          return (
            <li 
            //onClick= {() => this.props.selectBook() }
            onClick= {() => this.props.selectBook(book) }
            key={book.title} 
            className="list-group-item">{book.title}
            </li>
          );
      });
  }  
    render(){
        return (
                <ul className="list-group col-sm-4" > 
                    {this.renderList()}
                </ul>
            )
        }
    }
//42
function mapStateToProps(state){
    // whatever is returned will show up as props
    // inside of BookList
    return {
        //array of books
       books:state.books
    };
}
// take mapSateToProps to container
// IMPORTANT //
// anything return from this function will end up as props on the booklist Container
function mapDispatchToProps(dispatch){
    // whever selectBook is called , the result should passed to all our reducer
    return bindActionCreators({selectBook:selectBook}, dispatch);
}
//promote bookList from component to a container , it need to know 
//about this new dispatch method
export default connect(mapStateToProps, mapDispatchToProps )(BookList);
// 45 !!!!
