import Trip from '@components/Trip.jsx';
import { connect } from 'react-redux';
import { createNewTrip } from '@actions/trips';


const mapStateToProps = state => ({
  user: state.user,
  trips: state.trips,
  isNew: true
});

const mapDispatchToProps = dispatch => 
({
  createNewTrip: payload => dispatch(createNewTrip(payload))
})

const NewTripContainer = connect(mapStateToProps, mapDispatchToProps)(Trip);

export default NewTripContainer;