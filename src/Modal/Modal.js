import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  
      state = {
        isOpen: false
      }
    render() {
    return (
      <React.Fragment>
        <div className='row'>
        <button className='col-4 col-md-3 col-lg-2 col-sm-4 modal-btn' onClick={() => this.setState({ isOpen: true})}>Read Me</button>
        </div>

        {this.state.isOpen && (<div className='modal'>
        <div className='modal-body col-md-6'>
        <h1>Info</h1>
        <p>This TodoList has created by Vladlen Minin`s lesson</p>
        <button className="modalInsidaBtn" onClick={() => this.setState({ isOpen: false})}>Close modal</button>
        </div>
        </div>
        )}
      </React.Fragment>
    )
  }
}