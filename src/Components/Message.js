import React from 'react';
import Body from './Body';
import {
  BrowserRouter as Router,
  Path,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const Message = ({ message, toggleClass }) => {
  const selectedClass = message.selected ? 'selected' : ''
  const readClass = message.read ? 'read' : 'unread'
  const starredClass = message.starred ? 'fa-star' : 'fa-star-o'
  const checkedClass = message.checked ? 'checked' : ''
  const subject = message.subject

  const labels = message.labels.map((label, idx) => (
    <span key={idx} className="label label-warning">
      {label}
    </span>
  ))

  let id = message.id
  let selector = ''

  if (message.selected === true) {
    selector = 'checked'
    // add the drop down section here?
  }



  return (
    <div className={`row message ${message.selected ? 'selected' : ''} ${readClass}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              checked={`${selector}`} // defaulting to no boxes checked
              //readOnly= {true}   // ??
              onClick={() => {
                toggleClass(message, 'selected')
                {message.subject}

              }}
            />
          </div>

          <div
            className="col-xs-2"
            onClick={() => {
              toggleClass(message, 'starred')
            }}
          >
            <i className={`star fa ${starredClass}`} />
          </div>
        </div>
      </div>

      <Switch>
        <Route
          path={`/id`}
          render={() => (
            <Link
              className="col-xs-11"
              to="/"
              onClick={() => {
                toggleClass(message, 'read')
              }}
            >
              {labels}
              {subject}
            </Link>
          )}
        />
        <Route
          path="/"
          render={() => (
            <Link
              className="col-xs-11"
              to={`/id`}
              onClick={() => {
                toggleClass(message, 'read')
              }}
            >
              {labels}
              {subject}
              <Body key={message.id} messageId={message.id}
              />
              </Link>
          )}
        />
      </Switch>
    </div>
  )
}

export default Message
