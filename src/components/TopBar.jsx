import React from 'react';

// Components
import Button from '@components/Button.jsx';
import { Link } from 'react-router-dom';

// Style
import '@styles/components/TopBar.css';

class TopBar extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    leftButton: <Link to="/"><Button theme={`clear`}> Back </Button></Link>
  }

  render() {
    return <div className={`topBar-container`}>
      <div className={`topBar`}>
        <div className={`left`}>
          {this.props.leftButton}
        </div>
        <div className={`center`}>Trip Review</div>
      </div>
    </div>
  }
}

export default TopBar;