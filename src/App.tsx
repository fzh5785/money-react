import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to='/money'/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  return <h2>404</h2>;
}

function Statistics() {
  return (
    <Layout>
      <h2>statistics</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>tags</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>money</h2>
    </Layout>
  );
}

export default App;
