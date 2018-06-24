import React from 'react'; 
import firebase from '@configs/firebase';
import { getUserTrips } from '@configs/user';

import Button from '@components/Button.jsx'

import '@styles/components/Login.css';
import '@styles/components/Shared.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.initProvider();
  }

  initProvider() {
    this.provider = new firebase.auth.FacebookAuthProvider();
    this.provider.addScope('email');
    this.provider.addScope('public_profile');
    this.provider.addScope('user_link');
    this.provider.setCustomParameters({
      'display': 'popup'
    });
  }
  
  async doLogin() {
    try {
      const { additionalUserInfo: { profile: user } } = await firebase.auth().signInWithPopup(this.provider);

      this.props.saveUserData(user);
      const trips = await getUserTrips(user.id);
      this.props.loadUserTrips(trips);
      this.props.history.push('/');

    } catch (e) {
      this.error = "Unable to login!";
    }
  }

  render() {
    return <React.Fragment>
      <div className={'login center-frame'}>
        <h1> Trip Review </h1>
        <Button onClick={() => this.doLogin()}> Login with facebook </Button>
      </div>
      
    </React.Fragment>
  }
}

export default Login;