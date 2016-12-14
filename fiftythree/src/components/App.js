import React, { Component } from 'react';
import './App.css';
import NavBar from './nav_bar';
import ButtonA from './button_a';
import ButtonB from './button_b';
import ModalA from './modal_a';
import ModalB from './modal_b'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { isModalAdisplayed: false }
    this.state = {isModalBdisplayed: false}
    this.flipStateA = this.flipStateA.bind(this)
    // this.flipStateB = this.flipStateB.bind(this)
    this.eraseModal = this.eraseModal.bind(this)
    this.displayModalA = this.displayModalA.bind(this)
    this.displayModalB = this.displayModalB.bind(this)
  }

  flipStateA(event){
    event.preventDefault
    this.setState({ isModalAdisplayed: true })
    console.log('you are inside FLIPSTATE', this.state)
  }

  // displayModalA(e){
  //   if (this.state.isModalAdisplayed == true){
  //     console.log('inside display modal', this.state)
  //   return(
  //       <ModalA eraseModal={this.eraseModal}/>
  //     )
  //   }
  // }

  flipStateB(event){
    event.preventDefault
    this.setState({ isModalBdisplayed: true })
    console.log('you are inside FLIPSTATE', this.state)
  }

  displayModalB(){
    if (this.state.isModalBdisplayed == true){
      console.log('inside display modal', this.state)
      return (
        <ModalB eraseModal={this.eraseModal}/>
      )
    }
  }

  eraseModal(event){
    event.preventDefault
    this.setState({ isModalAdisplayed: false }) ||
    this.setState({isModalBdisplayed: false})
    //shouldn't have to return anything because App component will rerender entirely
  }


  render() {
    return (


          <div className='root'>
              <NavBar />

              <ButtonA flipStateA={this.flipStateA} displayModalA={this.displayModalA}/>

              <br></br>
              <ButtonB flipStateB={this.flipStateB} displayModalB={this.displayModalB}/>


          </div>



    );
  }
}


export default App;
