import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import IndexComponent from './components/IndexComponents/IndexComponent';

function App() {
  var root = "/gettoknowme";

  return (
    <Router>
        <Switch>
          <Route path={root}>
            <IndexComponent />
          </Route>
        </Switch>
    </Router>  );
}

export default App;
