import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'

class AccountDetail extends Component {

  render() {
    if(!this.props.selectedAccount){
      return(
        <div>
          Go Home to update the state first
        </div>
      )
    }
    const {id} = this.props.match.params;
    const {accountID} = this.props.match.params
    console.log('user id', id);
    console.log('account id', accountID);

    console.log('props', this.props);
    return (
      <div>
        <div className="col-md-6">
          <div className= "card">
            <div className= "card-block">
              <h4 className= "card-title">Account Information</h4>
              <h6 className= "card-subtitle mb-2 text-muted">{this.props.selectedAccount.accountType} for {this.props.selectedUser.name}</h6>
              <div className= "card-text">
                <div>${this.props.selectedAccount.balance}</div>


              </div>
            </div>
            <Link className="btn btn-primary" to={`/users/${this.props.selectedUser._id}`} >Back to User Details </Link>
          </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state in accountDetails', state);
    return state;
}

export default connect(mapStateToProps)(AccountDetail);
