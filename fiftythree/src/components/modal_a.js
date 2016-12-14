import React, { Component } from 'react';
import App from './App.js';
import reactCSS from 'reactcss';
//make sure you run npm install reactcss --save

class ModalA extends React.Component {

  //I had hoped to do a little but more styling but ran out of time

  constructor(props) {
    super(props)
    this.props.children

  }


      render(){
        const styles = reactCSS({
            'default': {
              'modal_card' : {
                position: 'relative',
                top: '50%',
                left: '50%',
                right: '50%',
                bottom: '50%',
                width: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '9999',
                background: '#ffb6c1'


              },
              'screen' : {
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                zIndex: '9996',
                background: 'rgba(0, 0, 0, 0.3)'


              }
            }
          })


          return(
            <div>
              <div style={ styles.screen }>
                  <div style={ styles.modal_card }>
                      <{this.props.data?}
                      // the function gets passed down from the button and for each button the function is the same but the content of the function is slightly different
                      <button onClick={this.props.eraseModal}>X</button>
                  </div>
              </div>
            </div>

              )
      }


}

export default ModalA;
