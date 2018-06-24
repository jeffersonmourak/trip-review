import Trip from '@components/Trip.jsx';
import { connect } from 'react-redux';
import { updateTrip } from '@actions/trips';


const mapStateToProps = state => ({
  user: state.user,
  trips: state.trips
});

const mapDispatchToProps = dispatch => 
({
  updateTrip: (index, payload) => dispatch(updateTrip(index, payload))
})

const TripContainer = connect(mapStateToProps, mapDispatchToProps)(Trip);

export default TripContainer;