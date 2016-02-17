(() => {
  'use strict';

  let React = require('react'),
      ReactDOM = require('react-dom'),
      ReactRouter = require('react-router'),
      IndexRoute = ReactRouter.IndexRoute,
      Route = ReactRouter.Route,
      Router = ReactRouter.Router,
      browserHistory = ReactRouter.browserHistory,
      Admin = require('./components/Admin/index.jsx'),
      CreateDocument = require('./components/CreateDocument/index.jsx'),
      DocumentPage = require('./components/DocumentPage/index.jsx'),
      Dashboard = require('./components/Dashboard/index.jsx'),
      Landing = require('./components/Landing/index.jsx'),
      Profile = require('./components/Profile/index.jsx'),
      Main = require('./components/Landing/Main.jsx'),
      Auth = require('./components/Auth/index.jsx');

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component={Landing} />
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/documents/create" component={CreateDocument} />
        <Route path="/documents/:id" component={DocumentPage} />
        <Route path="/profile" component={Profile} />
      </Route>
    </Router>), document.getElementById('content'));
})();
