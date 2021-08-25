import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [err, setErr] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post(
        'https://surreal-blogging.herokuapp.com/api/auth/register',
        {
          username,
          email,
          password,
        }
      );

      res.data.data.user && window.location.replace('/login');
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="register">
      <span className="register-title">Sign-Up</span>
      <form className="register-form" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          className="register-input"
          type="text"
          placeholder="Give a cool name yo..."
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <label>E-mail</label>
        <input
          className="register-input"
          type="email"
          placeholder="Please enter your email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Please Enter Your Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit" className="registerr-button">
          Sign-Up
        </button>
        {err && (
          <span
            style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}
          >
            Something went wrong
          </span>
        )}
        {/* <button className="register-login-button">Sign-In</button> */}
        <Link className="link" to="/login">
          Signin
        </Link>
      </form>
    </div>
  );
}

export default Register;
