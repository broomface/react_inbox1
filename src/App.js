import React, { Component } from 'react'
// can use this destructuring above as opposed to
//"import React from 'react'"" and "class App extends React.Component
import './App.css'
import MessagesList from './Components/MessagesList'
import Toolbar from './Components/Toolbar'
import Navbar from './Components/Navbar'
import Compose from './Components/Compose'
import {
  BrowserRouter as Router,
  Path,
  Route,
  Link
} from 'react-router-dom'



let isRead = true

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      bulkSelect: 1 // bulkSelect is for checkbox
    }
  }

  async componentDidMount() {  // if it didn't mount, it will...
     const response = await fetch('http://localhost:8082/api/messages')
     const json = await response.json()
     console.log(json._embedded)
     this.setState({messages: json._embedded.messages})
     console.log(this.state.messages);
   }

  toggleClass = async (message, class1) => {
    let obj = {
      "messageIds": [message.id],
      "command": "star",
      "star": !message.starred
    };
    const index = this.state.messages.indexOf(message)
    let newMessages = this.state.messages.slice(0) // creates a new copy of the array
    newMessages[index][class1] = !newMessages[index][class1] //.read returns a boolean value
    this.setState({ messages: newMessages })
    if(class1==='starred'){


   // let starID = this.state.messages.filter(ele => {
   //   if(ele.starred == true){
   //     return ele.id
   //   }
   // })

      const response = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(obj),
    })

     }
  }

  // this function will set the initial state of the messages

  messageBox = () => {

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

  markRead = async () => {
  let ids = []
   let newMessages = this.state.messages.slice(0);
   newMessages.map((elem) => {
     if(elem.selected === true){
       ids.push(elem.id)
       elem.read = true
       elem.selected = false
     }
   })
   let obj = {
     "messageIds": ids,
     "command": "read",
     "read": true
   }
   this.setState({
     messages: newMessages
   })
         const response = await fetch('http://localhost:8082/api/messages', {
         method: 'PATCH',
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json',
         },
         body: JSON.stringify(obj),
       })
  }

  markUnread = async () => {
    let ids = []
    let newMessages = this.state.messages.slice(0);
    newMessages.map((ele) => {
      if(ele.selected === true){
        ids.push(ele.id)
        ele.read = false
        ele.selected = false
      }
    })
    let obj = {
      "messageIds": ids,
      "command": "read",
      "read": false
    }
    this.setState({
      messages: newMessages
    })
    const response = await fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  }

labelSel = async (e) => {  // e is requesting the actual input from the event
  let ids = [];
  let newMessage = this.state.messages.slice(0);
  newMessage.map((ele) => {

    if(ele.selected === true){
      ids.push(ele.id)
      if(ele.labels.includes(e.target.value)){
      } else {
       ele.labels.push(e.target.value)
     }
     ele.selected = false
    }
  })
  let obj = {
  "messageIds": ids,
  "command": "addLabel",
  "label": e.target.value
}
e.target.value = "Apply label"
  this.setState({
    messages: newMessage
  })
  const response = await fetch('http://localhost:8082/api/messages', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(obj),
})
}

labelRem = async (e) => {
  let ids = []
  let newMessage = this.state.messages.slice(0);
  newMessage.map((ele) => {
    if(ele.selected === true){
       ids.push(ele.id)
       if(ele.labels.includes(e.target.value)){
         ele.labels.splice(ele.labels.indexOf(e.target.value), 1)
       }
       ele.selected = false
    }
  })
  let obj = {
  "messageIds": ids,
  "command": "removeLabel",
  "label": e.target.value
}
e.target.value = "Remove label"
  this.setState({
    messages: newMessage
  })
  const response = await fetch('http://localhost:8082/api/messages', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(obj),
})
}

del = async () => {
  let ids = []
  let arr = []
  let newMessage = this.state.messages.slice(0)
  newMessage.map((ele) => {
    if(!ele.selected){
      arr.push(ele)
    }if(ele.selected === true){
      ids.push(ele.id)
    }

  })
  let obj = {
  "messageIds": ids,
  "command": "delete"
}
  this.setState({
    messages: arr
  })
  const response = await fetch('http://localhost:8082/api/messages', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(obj),
})
}

addMessage = async (e) => {
  e.preventDefault()
  let body = document.getElementById("body").value
  let subject = document.getElementById("subject").value


  const response = await fetch('http://localhost:8082/api/messages', {
    method: 'POST',
    body: JSON.stringify({"body": body, "subject": subject}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  const message = await response.json()
  this.setState({messages: [...this.state.messages, message]})
}
messCompose = () => {
this.setState.message;
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
          messCompose = {this.messCompose}
          />
          <Route path="/compose" render={() => (
            <Compose addMessage= {this.addMessage}/> )}
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

export default App
