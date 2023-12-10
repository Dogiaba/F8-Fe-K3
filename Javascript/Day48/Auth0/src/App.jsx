import React from 'react'
import LoginButton from './components/LoginButton'
// import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import "../src/assets/styles/App.css"
function App() {
  return (
    <div className='containers'>
      <LoginButton/>
      <Profile/>
    </div>
  )
}

export default App