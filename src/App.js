 
import './App.css';
import Cake from './componenet/cake';
import {ReduxOne,  storex } from './componenet/redux/main';
import { Provider } from 'react-redux';
import SelectorHook from './componenet/redux/selectorHook';
import OneHook from './componenet/Hooks/stateHook';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mainx from './componenet/Hooks/main';
import cake from './componenet/cake';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Provider store={storex} >

    <div className={"App"}>
      <nav className={"App-header"}>
        <ul className={''}>
          <li className={""}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/redux/main">Redux</Link>
          </li>
          <li>
            <Link to="/Hooks/main">Hooks</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Hooks/main">
          <Mainx />
          {/* <OneHook/> */}
        </Route>
        <Route path="/redux/main">
          <ReduxOne />
          <Cake/>
          <SelectorHook/>

        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
    </div>
    </Provider>
    </Router>
  );
}

export default App;
