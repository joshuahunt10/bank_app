//React imports
import React, {Component} from 'react';
//Redux imports
import {connect} from 'react-redux';
import {selectUser} from '../actions/actions.js'
import { bindActionCreators } from 'redux';
//react router imports
import { Link } from 'react-router-dom';

class UserList extends Component {
    render() {
        let users = this.props.users.map((user) => {
            return (
                <li key={user._id} className="list-group-item" onClick={() => this.props.selectUser(user)}>
                  <Link to={`/users/${user._id}`}>{user.name}</Link>
                </li>
            );
        });
        return (
            <div>
              <h5>Users with open accounts:</h5>
              <ul>
                {users}
              </ul>
            </div>
        );
    }
}
//This function is putting all the users in the state when the page loads.
function mapStateToProps(state) {
    return {users: state.users}; //This puts the state.users (from the initial state) on the props in a key called users
}
//This will run once the action is done.  The action is an on click which is on line 14
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser //running the action selectUser in the action.js It takes in the user that we passed it on line 14.
    }, dispatch)//What we passed in on line 14 will be the dispatch here.  Once it arrives in the actions it is the payload.
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
