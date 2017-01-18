import React from 'react';
import {observer} from 'mobx-react';

import UserActions from '../../actions/UserActions';
import {browserHistory} from 'react-router';

const LoginForm = observer(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.state = {
      email: null,
      password: null,
      result: null
    };
  }

  handleLogin = () => {
    let data = this.store.getLoginResult();
    if (data) {
      if (data.error) {
        window.Materialize.toast(data.error, 2000, 'error-toast');
      } else {
        // The login was successful. Store user data in localStorage
        localStorage.setItem('user', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.user));
        window.Materialize.toast('Logged in Successfully!', 2000, 'success-toast');
        browserHistory.push('/dashboard');
      }
    }
  };

  handleFieldChange = (event) => {
    // A function bound to the event object
    let stateObject = function() {
      let returnObj = {};
      returnObj[this.target.name] = this.target.value;
      return returnObj;
    }.bind(event)();

    this.setState(stateObject);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let loginPayload = {
      username: this.state.email,
      password: this.state.password
    };
    console.log(loginPayload);
    UserActions.login(loginPayload, this.store);
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <input className="validate"
                id="email"
                name="email"
                onChange={this.handleFieldChange}
                required
                type="text"
            />
          <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-field col s12">
            <input className="validate"
                id="password"
                name="password"
                onChange={this.handleFieldChange}
                required
                type="password"
            />
          <label htmlFor="password">Password</label>
          </div>
          <div className="col s12">
            <div className="container center">
              <button className="btn waves-effect header-btn blue"
                  name="action"
                  type="submit"
              > Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
