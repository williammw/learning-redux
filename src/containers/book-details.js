import React, {Component} from 'react';

// container 必備
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        return(
            <div> Book Details!</div>
        );
    }
}

// container 必備
function mapStateToProps(state){
    return{
        book:state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);