import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    return (
      <div className="register">
          <span className="registerTitle">Register</span>
          <form className="registerForm">
              <label>Username</label>
              <input type="text" className="registerInput" placeholder="Enter User Name"/>
              <label>Email</label>
              <input type="text" className="registerInput" placeholder="Enter your email address"/>
              <label>Password</label>
              <input type="password" className="registerInput" placeholder="Enter your password"/>
              <button className="registerButton">Register</button>
          </form>
          <button className="registerLoginButton">
            <Link to ="/register" className='link'>Login</Link>
          </button>
      </div>
    )
  }
  
