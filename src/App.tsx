import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import styles from './App.module.css';

import OldSchool from "./features/old-school/OldSchool";
import ReactToolkit from "./features/react-toolkit/ReactToolkit";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/old-school">Old School</Link>
          <Link to="/react-toolkit">React Toolkit</Link>
        </div>

        <div className={styles.main}>
          <Switch>
            <Route path="/old-school">
              <OldSchool/>
            </Route>
            <Route path="/react-toolkit">
              <ReactToolkit/>
            </Route>
            <Route path="/">
              <Counter/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
