import React, { Component } from 'react';


// change Body to a class component..
// Component Did mount for a Fetch requests

class Body extends Component{
  constructor(props){  // props
    super(props)         // props
    this.state = {
      body: ""
    }
}

async componentDidMount() {
  const response = await fetch(`http://localhost:8082/api/messages/${this.props.messageId}`)
  const json = await response.json()
  console.log(1, response, 2, json.body)
  this.setState({ body: json.body })
}

render() {
  console.log(this)
  return (
    <div class="row message-body">
      <div class="col-xs-11 col-xs-offset-1">
      {this.state.body}
      </div>
    </div>
    )
  }
}
export default Body;
