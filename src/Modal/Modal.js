import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  
      state = {
        isOpen: false
      }
    render() {
    return (
      <React.Fragment>
        <button className='modal-btn' onClick={() => this.setState({ isOpen: true})}>Read Me</button>

        {this.state.isOpen && (<div className='modal'>
        <div className='modal-body'>
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