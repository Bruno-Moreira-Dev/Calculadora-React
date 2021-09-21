import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    let classes = 'button';
    classes += this.props.operation === 'operation' ? ' operation' : '';
    classes += this.props.operation === 'double' ? ' double' : '';
    classes += this.props.operation === 'triple' ? ' triple' : '';

    return (
      <button
        type="button"
        className={classes}
        onClick={() => this.props.click && this.props.click(this.props.label)}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;