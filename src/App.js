
import React from 'react'
import "./App.css"

function App() {
  return (
    <>
    <div className="section1">
      <form className="login-form">
        <h1>Login Form</h1>

        <input
          type="text"
          placeholder="Enter your fullname in detail"
          className="input-box"
        />

        <input
          type="password"
          placeholder="Enter your password in number"
          className="input-box"
        />

        <button className="btn">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App