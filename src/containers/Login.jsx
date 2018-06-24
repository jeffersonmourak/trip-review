import Login from '@components/Login.jsx';
import { connect } from 'react-redux';
import { createUser } from '@actions/user';
import { initialize } from '@actions/trips';


const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => 
({
  saveUserData: payload => dispatch(createUser(payload)),
  loadUserTrips: payload => dispatch(initialize(payload))
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;