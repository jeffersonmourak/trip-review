import React from 'react'; 
import { connect } from 'react-redux';
import { updateTrip } from '@actions/trips';
import { updateTrips } from '@configs/user';

import Button from '@components/Button.jsx';
import Input from '@components/Input.jsx';

class NewExpense extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeValue(data, value) {
    let state = { ...this.state };

    state[data] = value;

    this.setState(state);
  }

  async saveExpense() {
    let expenses = this.props.trips[this.props.tripId].expenses || [];

    expenses.push(this.state);
    
    this.props.updateTrip(this.props.tripId, {
      ...this.props.trips[this.props.tripId],
      expenses
    }); 

    await updateTrips(this.props.user.id, this.props.trips);
  }

  render() {
    return <React.Fragment>
      <div className={'trip-new-spent-form'} >
        <label className={'trip-form-input'}>
          <span>Place where you spent money</span>  
          <Input type={'text'} onChange={ value => this.onChangeValue('place', value) } />
        </label>

        <label className={'trip-form-input'}>
          <span>Category of spent</span>  
          <Input type={'text'} onChange={ value => this.onChangeValue('category', value) } />
        </label>

        <label className={'trip-form-input'}>
          <span>Price</span>  
          <Input type={'number'} onChange={ value => this.onChangeValue('price', value) } />
        </label>

        <Button onClick={ () => this.saveExpense() } > Save Expense </Button>
      </div>
    </React.Fragment>
  }
}

const mapStateToProps = state => ({
  user: state.user,
  trips: state.trips
});

const mapDispatchToProps = dispatch => 
({
  updateTrip: (index, payload) => dispatch(updateTrip(index, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);