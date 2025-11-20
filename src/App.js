
import React from 'react'
import "./App.css"

function App() {
  return (
    <>
    <div className="section1">
      <form className="login-form">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter your username"
          className="input-box"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="input-box"
        />

        <button className="btn">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App