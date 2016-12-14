import React, { Component } from 'react';
import App from './App';
import ModalA from './modal_a'



class ButtonA extends React.Component {

  constructor(props) {
    super(props)
    this.props.children
    this.props.post = {post : "THIS IS THE TEXT"}
    //this would require a mapStatetoProps
  }
// how do i do this without redux?!?!



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
