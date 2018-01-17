import React, { Component } from 'react'
// can use this destructuring above as opposed to
//"import React from 'react'"" and "class App extends React.Component
import './App.css'
import MessagesList from './Components/MessagesList'
import Toolbar from './Components/Toolbar'
import Navbar from './Components/Navbar'
let isRead = true

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: messages,
      bulkSelect: 1 // bulkSelect is for checkbox
    }
  }

  toggleClass = (message, class1) => {
    const index = this.state.messages.indexOf(message)
    let newMessages = this.state.messages.slice(0) // creates a new copy of the array
    newMessages[index][class1] = !newMessages[index][class1] //.read returns a boolean value
    this.setState({ messages: newMessages })
  }

  // this function will set the initial state of the messages

  messageBox = () => {
    const selectAll = 0
    const selectSome = 1
    const selectNone = 2




let newMessage = this.state.messages.slice(0)
if(isRead === true){
  for (let i = 0; i < newMessage.length; i++){
    newMessage[i].selected = true;
  }
  isRead= false
}
else{
  for (let i = 0; i < newMessage.length; i++){
    newMessage[i].selected = false;
  }
  isRead = true
}

  this.setState({
    messages: newMessage
  })
}

  markRead = () => {
   let newMessages = this.state.messages.slice(0);
   newMessages.map((elem) => {
     if(elem.selected === true){
       elem.read = true
       elem.selected = false
     }
   })
   this.setState({
     messages: newMessages
   })
  }

  markUnread = () => {
    let newMessages = this.state.messages.slice(0);
    newMessages.map((ele) => {
      if(ele.selected === true){
        ele.read = false
        ele.selected = false
      }
    })
    this.setState({
      messages: newMessages
    })
  }

labelSel = (e) => {  // e is requesting the actual input from the event
  let newMessage = this.state.messages.slice(0);
  newMessage.map((ele) => {

    if(ele.selected === true){
      if(ele.labels.includes(e.target.value)){
      } else {
       ele.labels.push(e.target.value)
     }
     ele.selected = false
     e.target.value = "Apply label"
    }
  })
  this.setState({
    messages: newMessage
  })
}

labelRem = (e) => {
  let newMessage = this.state.messages.slice(0);
  newMessage.map((ele) => {
    if(ele.selected === true){
       if(ele.labels.includes(e.target.value)){
         ele.labels.splice(ele.labels.indexOf(e.target.value), 1)
       }
       ele.selected = false
       e.target.value = "Remove label"
    }
  })
  this.setState({
    messages: newMessage
  })
}

del = () => {
  let arr = []
  let newMessage = this.state.messages.slice(0)
  newMessage.map((ele) => {
    if(!ele.selected){
      arr.push(ele)
    }
  })
  this.setState({
    messages: arr
  })
}



  toggleUpdate = message => {
    const selectNew = this.setState
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Toolbar
          messageBox = {this.messageBox} // pushing props to MessagesList
          bulkSelect = {this.state.bulkSelect}
          messages = {this.state.messages}
          markRead = {this.markRead}
          markUnread = {this.markUnread}
          labelSel = {this.labelSel}
          labelRem = {this.labelRem}
          del = {this.del}
          />
          <MessagesList
            messages={this.state.messages}  // pushing props to MessagesList
            toggleClass={this.toggleClass}  // pushing props to MessagesList
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
