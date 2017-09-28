import React, {Component} from 'react';

// container 必備
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        
        if(!this.props.book){
        return (<div>Select book and get started</div>);
        }
        return(
            <div>
                <h3>Book Details for:</h3>
                <div>{this.props.book.title}</div>
                <div>{this.props.book.pages}</div>
            </div>
        );
    }
}

// container 必備
function mapStateToProps(state){
    return{
        book : state.activeBook
    };
}
// container 必備
export default connect(mapStateToProps)(BookDetail);