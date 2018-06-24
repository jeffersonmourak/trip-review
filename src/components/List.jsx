import React from 'react';

import '@styles/components/List.css';

const List = props => (
  <div className={'trip-list'} >
    { props.items.length === 0 && <span> { props.noItemsText } </span> }
    { props.items.map( (item, index) => <div key={index} className={'trip-list-item'}> <props.listItem item={item} index={index} /> </div>) }
  </div>
)

List.defaultProps = {
  items: []
};

export default List;