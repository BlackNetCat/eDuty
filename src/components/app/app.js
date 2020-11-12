import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Graph from '../graph';
import { HomePage, ReportPage} from '../pages';
import './app.css';

const App = () => {
    
  return (
      <main role="main" className="container">
        <Header />
        <Graph />
        <Switch>
            <Route path="/"
            component={HomePage}
            exact  />

            <Route path="/report"
            component={ReportPage} />
        </Switch>
      </main>
  );
};

export default App;