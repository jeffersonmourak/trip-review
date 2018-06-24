import React from 'react';

// Style
import '@styles/components/Button.css';

const Button = props => (
  <button className={`trip-button theme-${props.theme}`} { ...props } >
    { props.children }
  </button>
);

Button.defaultProps = {
  theme: 'default'
}

export default Button;