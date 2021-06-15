import './App.css';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/main';
import Login from './components/session/login';
import Register from './components/session/register';
import Nav from './components/nav/nav';
import Profile from './components/profile';
import Resume from './components/resume';
import Organisation from './components/organisation';
import { Context } from '.';
import JobPage from './components/post_job/jobPage';
import OrganisationProfile from './components/organisation/organisationProf';
import ResumeProfile from './components/resume/resumeProfile';

const Header = Comp => props => {
  return (
    <>
    < Nav />
    < Comp {...props} />
    </>
  )
}


function App() {
  const {user} = useContext(Context)
  
  
  return (
    <Router>
      <Switch>
        <>
        { !user.isAuth && (
        <>
        <Route exact path='/' component={Header(Main)} />
        <Route exact path='/resumes' component={ Header(Resume)} />
        <Route exact path='/organisations' component={ Header(Organisation) } />
        <Route exact path='/profile' component={Header(Profile)} />
        <Route exact path='/jobs/:id' component={Header(JobPage)} />
        <Route exact path='/organisations/:id' component={Header(OrganisationProfile)} />
        <Route exact path='/resumes/:id' component={ Header(ResumeProfile) } />
        </>
        )}
        
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={ Register } />

        </>
      </Switch>
    </Router>
  );
}

export default App;
