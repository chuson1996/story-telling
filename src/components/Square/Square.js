import React, { Component, PropTypes } from 'react';
import c from 'classnames';
import './Square.css';

export default class Square extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;

    return (
      <svg width="149px" height="150px" viewBox="-10 -11 149 150" className={c('rectangle', className)}>
        <g stroke="none" strokeWidth="4" fill="none" fillRule="evenodd">
            <polygon className="bigRectangle" stroke="#000000" strokeWidth="20" points="129 5 129 128 0.99609381 128 0.99609381 -5.96028258e-08 129 -5.96028258e-08"></polygon>
            <polygon className="smallRectangle" stroke="#000000" points="129 5 129 128 0.99609381 128 0.99609381 -5.96028258e-08 129 -5.96028258e-08"></polygon>
        </g>
    </svg>
    );
  }
}
