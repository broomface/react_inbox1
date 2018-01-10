import React, { Component } from 'react'
// can use this destructuring above as opposed to
//"import React from 'react'"" and "class App extends React.Component
import './App.css';
import MessagesList from './Components/MessagesList';
import Toolbar from './Components/Toolbar';
import Navbar from './Components/Navbar';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: this.props.messages
    }
  }

toggleClass = (message) => {
  const index = this.state.messages.indexOf(message)
  let newMessages = this.state.messages.slice(0)  // creates a new copy of the array
  newMessages[index].class1 = !newMessages[index].class1; //.read returns a boolean value
  this.setState({messages:newMessages})
}

// this function will set the initial state of the messages
toggleSelected = (message) => {
const select = this.state.messages.indexOf(read)
let readMessages = this.state.messages.slice(0)
readMessages[index].class1 = !readMessages[index].class1;
this.setState({messages: readMessages})

toggleUpdate = (message) => {
  const selectNew = this.setState
}



//
//   if (select) {
//   // change the state with setState
//   // check checkbox
//   // mark as read
// } else {
//   // uncheck checkbox
//   // mark as unread
//  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <div className='container'>
      <Toolbar />
      <MessagesList messages = {this.state.messages} toggleClass = {this.toggleClass}/>
      </div>
      </div>
    );
  }
}

export default App
