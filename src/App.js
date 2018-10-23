import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthenticatedRoute from './Util/AuthenticatedRoute';
import NotAuthenticatedRoute from './Util/NotAuthenticatedRoute';

import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NotAuthenticatedRoute exact path="/" component={ Home } />

          <AuthenticatedRoute exact path="/dashboard" component={ Dashboard } />          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
