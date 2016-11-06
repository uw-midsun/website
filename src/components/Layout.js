'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
        Much Cars And Fun And stuff
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <Link to="/"></Link>
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
    children: React.PropTypes.element.isRequired
  };
  