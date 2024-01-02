import LoginButton from './components/LoginButton'
// import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import "../src/assets/styles/App.css"
import { ToastContainer } from 'react-toastify'
import { useAuth0 } from '@auth0/auth0-react'
function App() {
  const{user, isAuthenticated, logout} = useAuth0()
  return (
    <div className='containers'>
      
      {!isAuthenticated ? ( <LoginButton/>
      ):(
        <Profile user={user} logout={logout}/>
      )}
      <ToastContainer />
    </div>
  )
}

export default App