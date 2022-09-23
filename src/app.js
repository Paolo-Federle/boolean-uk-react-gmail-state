import Header from './components/header'
import { useState } from "react"
import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  // Use initialEmails for state
  const [email, setEmail] = useState(initialEmails)
  const [inbox, setInbox] = useState(checkInbox())
  const [starredMail, setStarredMail] = useState(0)
  var starCounter = 0

  
  // console.log("initialEmails: ", initialEmails)
  // console.log("email: ", email)
  function printSomething() {
    console.log("I got printed")
  }

  function checkIfRead(mail) {
    if (mail.read === true) {
      return "read"
    } return "unread"
  }

  function checkInbox() {
    let mailToRead = 0
    email.forEach((mail) => {
      if (mail.read === false) {
        mailToRead++
        return mailToRead
      }
    })
    return mailToRead
  }

  // function checkStar() {
      
  //   }
  // }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            onClick={printSomething}
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{inbox}</span>
          </li>
          <li
            className="item"
            onClick={printSomething}
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{starredMail}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input id="hide-read" type="checkbox" checked={false} onChange={printSomething}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">

        {email.map((mail, index) => (
          <li key={index} className={`email ${checkIfRead(mail)}`}>
            <div className="select">
              <input className="select-checkbox" type="checkbox" onChange={printSomething}/>
            </div>
            <div className="star">
              <input className="star-checkbox" type="checkbox" checked={mail.starred} onChange={printSomething} />
            </div>
            <div className="sender">{mail.sender}</div>
            <div className="title">{mail.title}</div>

            {/* {!workout.done &&
              <button onClick={e => completeWorkout(workout)}>Done</button>}
            {workout.done &&
              <p>✅</p>}
            <button onClick={e => deleteWorkout(workout)}>Delete</button> */}
          </li>
        ))}

      </main>
    </div>
  )
}

export default App
