import { Link } from 'react-router-dom';
import './style.css';

function SignUp() {
  return (
    <div className="signup-container">
      <form className="form">
        <p className="title">Register</p>

        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <span>Firstname</span>
          </label>
          <label>
            <input required="" placeholder="" type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input required="" placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" className="input" />
        
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
