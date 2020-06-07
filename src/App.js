import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import IndexPage from './components/IndexComponents/IndexPage';

function App() {
  var root = "/gettoknowme";

  return (
    <Router>
        <Switch>
          <Route path={root}>
            <IndexPage />
          </Route>
        </Switch>
    </Router>  );
}

export default App;
