import axios from 'axios';
import { useContext } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../components/Context/Context';
import './Login.css';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const submitHandler = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        'https://surreal-blogging.herokuapp.com/api/auth/login',
        {
          email: userRef.current.value,
          password: passwordRef.current.value,
        }
      );

      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.data.user });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <span className="login-title">Sign-In</span>
      <form className="login-form" onSubmit={submitHandler}>
        <label>E-mail</label>
        <input
          className="login-input"
          type="email"
          placeholder="Please enter your email"
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Please Enter Your Password"
          ref={passwordRef}
        />
        <button type="submit" className="login-button" disabled={isFetching}>
          Sign-In
        </button>
        {/* <button className="register-button">Sign-Up</button> */}
        <Link className="link" to="/register">
          SignUp
        </Link>
      </form>
    </div>
  );
}

export default Login;
