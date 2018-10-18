import React, { Component } from 'react';
import {connect} from 'react-redux';

class InputCounter extends Component{
    
    handleChange = (event) => {
        this.props.dispatch({ type: 'CHANGE', value: event.target.value  });
    }

    render() {
        return <div><input type="text" onChange={this.handleChange}/></div>
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }
  
export default connect(mapStateToProps)(InputCounter);
