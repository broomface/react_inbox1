import React from 'react'
import Message from './Message'
import {
  BrowserRouter as Router,
  Path,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const Toolbar = ({
  messageBox,
  bulkSelect,
  messages,
  markRead,
  markUnread,
  labelSel,
  labelRem,
  del,
  messCompose
}) => {
  let selectButton = ''

  // This is for the main toolbar checkblock button...begin
  let selectedMessage = messages.filter(elem => {
    if (elem.selected === true) {
      return elem
    }
  })
  console.log(selectedMessage)

  if (selectedMessage.length === 0) {
    selectButton = 'fa fa-square-o'
  } else if (selectedMessage.length === messages.length) {
    selectButton = 'fa fa-check-square-o'
  } else {
    selectButton = 'fa fa-minus-square-o'
  }
  // This is for the main toolbar checkblock button...end
  let unreadMessages = messages.filter(elem => {
    if (elem.read === false) {
      return elem
    }
  })

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{`${unreadMessages.length}`}</span>
          unread messages
        </p>
        <Switch>
          <Route
            path="/compose"
            render={() => (
              <Link className="btn btn-danger" to="/">
                <i className="fa fa-plus"> </i>
              </Link>
            )}
          />
          <Route
            path="/"
            render={() => (
              <Link className="btn btn-danger" to="/compose">
                <i className="fa fa-plus"> </i>
              </Link>
            )}
          />
        </Switch>

        <button className="btn btn-default">
          <i className={`${selectButton}`} onClick={messageBox} />
        </button>

        <button className={`btn btn-default`} onClick={markRead}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={markUnread}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={labelSel}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={labelRem}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={del}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  )
}

export default Toolbar
