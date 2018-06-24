import React from 'react';
import moment from 'moment';
import { updateTrips } from '@configs/user';
import Authenticated from '@components/Authenticated.jsx';
import NewExpense from '@components/NewExpense.jsx';
import List from '@components/List.jsx';

import Button from '@components/Button.jsx';
import Input from '@components/Input.jsx';
import TopBar from '@components/TopBar.jsx';
import { Link } from 'react-router-dom';
import PieChart from "react-svg-piechart"

import '@styles/components/Trip.css';
import '@styles/components/Shared.css';

const ListItem = props => (
  <span key={props.index}> { props.item.title } - { props.item.value } </span>
);

class NewTrip extends React.Component {
  constructor(props) {
    super(props);

    this.tripId = !props.isNew && this.props.match.params.id;

    this.state = {
      date: '',
      city: '',
      budget: 0
    };

    if (!props.isNew && props.trips[this.tripId]) {
      this.state = props.trips[this.tripId];
    }
  }

  onChangeValue(data, value) {
    let state = { ...this.state };

    state[data] = value;

    this.setState(state);
  }

  async saveTrip() {
    if (this.props.isNew) {
      this.props.createNewTrip(this.state);
    } else {
      this.props.updateTrip(this.tripId, this.state);
    }

    await updateTrips(this.props.user.id, this.props.trips);
  }

  getChartData() {

    if (!this.props.trips[this.tripId]) {
      return [];
    }

    let expenses = this.props.trips[this.tripId].expenses,
        categories = {}
    if (!expenses) {
      return [];
    }

    return expenses.reduce( (acc, item) => {
      const index = acc.findIndex( _item => _item.title === item.category );
    
      if (index > -1) {
        acc[index].value += Number(item.price);
      } else {
        acc.push({
          title: item.category,
          value: Number(item.price),
          color: '#22594e'
        })
      }
      return acc;
    }, []);
  }

  render() {
    return <React.Fragment>
      <Authenticated>
        <TopBar leftButton={<Link to={'/'}> <Button> Back </Button> </Link>}/>
        <div className={'trip-form center-frame'}>
          <label className={'trip-form-input'}>
            <span>Trip Date</span>  
            <Input value={this.state.city} type={'date'} onChange={ e => this.onChangeValue('date', e.target.value) } />
          </label>
          <label className={'trip-form-input'}>
            <span>Trip City</span>
            <Input value={this.state.city} type={'text'} onChange={ e => this.onChangeValue('city', e.target.value) } />
          </label>
          <label className={'trip-form-input'}>
            <span>Trip Budget</span>
            <Input value={this.state.budget} type={'number'} onChange={ e => this.onChangeValue('budget', e.target.value) } />
          </label>
      
          { !this.props.isNew && <NewExpense tripId={this.tripId}/> }

          <div className={'data-columns'}>
            <div>
              <PieChart viewBoxSize={100} data={this.getChartData()} expandOnHover/>
            </div>
            <div>
              <List items={this.getChartData()} noItemsText={'No Expenses created!'} listItem={ ListItem }/>
            </div>
          </div>

          <Button onClick={ () => this.saveTrip() } > Save! </Button>
        </div>
      </Authenticated>
    </React.Fragment>
  }
}

export default NewTrip;