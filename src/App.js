import Navbar from './components/navbar/Navbar';
import './App.css';
import Settings from './pages/settings/Settings';
import Single from './pages/home/Single';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Write from './pages/write/Write';
import Post from './components/post/Post';
import Posts from './components/posts/Posts';
import Sidebar from './components/sidebar/Sidebar';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './components/Context/Context';
import About from './pages/About/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact/Contact';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/single">
          <Single />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/sidebar">
          <Sidebar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
