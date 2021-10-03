import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home, MothersDay2021 } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mothers-day-2021">
          <MothersDay2021 />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
