import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class BaseLayout extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">$$ Dolla Billz $$</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {this.props.children}
      </div>
    );
  }

}

export default BaseLayout;
