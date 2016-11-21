import React, { Component } from 'react';
import App from './App';
import ModalA from './modal_a'



class ButtonA extends React.Component {

  constructor(props) {
    super(props)
    this.props.children

  }


  render(){

    return(
      <div>
      <button className="btn btn-primary btn-lg" onClick={this.props.flipStateA}> Who is She? </button>
     {this.props.displayModalA()}


      </div>


    )
  }


}

export default ButtonA;
