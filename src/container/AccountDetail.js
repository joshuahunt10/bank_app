import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'
import {withdrawFunds} from '../actions/actions.js'

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
    const userIdx = this.props.users.findIndex(user => user._id === id);
    const accountIdx = this.props.users[userIdx].accounts.findIndex(account => account.id === parseInt(accountID, 10));

    console.log(this.props.users[userIdx].accounts[accountIdx].balance);


    return (
      <div>
        <div className="col-md-6">
          <div className= "card">
            <div className= "card-block">
              <h4 className= "card-title">Account Information</h4>
              <h6 className= "card-subtitle mb-2 text-muted">{this.props.selectedAccount.accountType} for {this.props.selectedUser.name}</h6>
              <div className= "card-text">
                <div>${this.props.selectedAccount.balance}</div>

                <button type="button" className="btn btn-success" onClick={() => this.props.withdrawFunds(5)}>Withdraw $5</button>
                <button type="button" className="btn btn-primary" onClick={() => this.props.withdrawFunds(10)}>Withdraw $10</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.withdrawFunds(20)}>Withdraw $20</button>


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
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    withdrawFunds: withdrawFunds
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
