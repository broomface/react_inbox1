import React, { Component } from 'react'
// can use this destructuring above as opposed to
//"import React from 'react'"" and "class App extends React.Component
import './App.css'
import MessagesList from './Components/MessagesList'
import Toolbar from './Components/Toolbar'
import Navbar from './Components/Navbar'

class App extends Component {
  constructor() {  // removed props
    super()   // removed props
    this.state = {
      messages: messages  // removed this.
    }
  }

  toggleClass = (message, class1) => {
    console.log(message)
    const index = this.state.messages.indexOf(message)
    let newMessages = this.state.messages.slice(0) // creates a new copy of the array
    newMessages[index][class1] = !newMessages[index][class1] //.read returns a boolean value
    this.setState({ messages: newMessages })
  }

  // this function will set the initial state of the messages

  toggleUpdate = message => {
    const selectNew = this.setState
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Toolbar />
          <MessagesList
            messages={this.state.messages}
            toggleClass={this.toggleClass}
          />
        </div>
      </div>
    )
  }
}

const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": false,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": false,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

export default App
