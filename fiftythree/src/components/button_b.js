import React, { Component } from 'react';
import App from './App';
import ModalB from './modal_b'


class ButtonB extends React.Component {

  constructor(props) {
    super(props)
    this.props.children

  }


  render(){

    return(
      <div>
      <button className="btn btn-primary btn-lg" onClick={this.props.flipStateB}> Why 53? </button>
          {this.props.displayModalB()}

      </div>


    )
  }


}

export default ButtonB;
