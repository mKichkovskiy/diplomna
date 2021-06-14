import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserStore from './components/store/UserStore';
import JobStore from './components/store/postJobStore';

export const Context = createContext(null)


ReactDOM.render(
    <Context.Provider value={{
      user: new UserStore(),
      job: new JobStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);


reportWebVitals();
