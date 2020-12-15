import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import styles from './App.module.css';

import OldSchool from "./features/old-school/OldSchool";
import ReduxToolkit from "./features/redux-toolkit/ReduxToolkit";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/old-school">Old School</Link>
          <Link to="/redux-toolkit">Redux Toolkit</Link>
        </div>

        <div className={styles.main}>
          <Switch>
            <Route path="/old-school">
              <OldSchool/>
            </Route>
            <Route path="/redux-toolkit">
              <ReduxToolkit/>
            </Route>
            <Route path="/">
              <h1>Hello World!</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
