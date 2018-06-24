import React from 'react'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Authenticated extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <React.Fragment>
      { this.props.user.id && this.props.children }
      { !this.props.user.id && <Redirect to={`/login`} />}
    </React.Fragment>
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Authenticated);
