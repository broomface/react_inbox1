import React from 'react'

let isSelected = ''
const Message = ({ message, toggleClass }) => {
  const selectedClass = message.selected ? 'selected' : ''
  const readClass = message.read ? 'read' : 'unread'
  const starredClass = message.starred ? 'fa-star' : 'fa-star-o'
  const checkedClass = message.checked ? 'checked' : ''

  return (
    <div
      className={`row message ${readClass} ${selectedClass}`}
      onClick={() => {
        toggleClass(message, 'read')
        toggleClass(message, 'selected')
      }}
    >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              defaultChecked={message.selected}
              onClick={() => {
                toggleClass(message, 'selected')
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
      <div className="col-xs-11">
        <a href="#">{message.subject}</a>
      </div>
    </div>
  )
}
export default Message
