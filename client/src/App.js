import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './components/main';
import Login from './components/session/login';
import Register from './components/session/register';
import Nav from './components/nav/nav';
import Profile from './components/profile';
import Resume from './components/resume';
import Organisation from './components/organisation';

const Header = Comp => props => {
  return (
    <>
    < Nav />
    < Comp {...props} />
    </>
  )
}


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Header(Main)} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={ Register } />
        <Route exact path='/resumes' component={ Header(Resume)} />
        <Route exact path='/organisations' component={ Header(Organisation) } />
        <Route exact path='/profile' component={Header(Profile)} />
      </Switch>
    </Router>
  );
}

export default App;
