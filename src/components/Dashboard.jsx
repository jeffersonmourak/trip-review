import React from 'react'; 
import { connect } from 'react-redux';

import Authenticated from '@components/Authenticated.jsx';
import TopBar from '@components/TopBar.jsx';
import Button from '@components/Button.jsx';
import List from '@components/List.jsx';
import { Link } from 'react-router-dom';

const listItem = props => (
  <Link key={props.index} to={`/trip/${props.index}`}>
    <span>{ `Trip to ${props.item.city}` }</span>
  </Link>
)

const Dashboard = props => (
  <React.Fragment>
    <Authenticated>
      <TopBar leftButton={<Link to={'/trip/new'}> <Button> New Trip </Button> </Link>}/>
      <List items={props.trips} noItemsText={'No Trips created!'} listItem={ listItem }/>
    </Authenticated>
  </React.Fragment>
)

const mapStateToProps = state => ({
  user: state.user,
  trips: state.trips
});

export default connect(mapStateToProps)(Dashboard);