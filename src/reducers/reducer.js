import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/actions.js';
import userList from '../data/users'
import update from 'immutability-helper'

const initialState ={
  users: userList(),
  selectedUser: null,
  selectedAccount: null
}

const reducer = function (state = initialState, action) {
  switch(action.type){
    case USER_SELECTED:
    return update(state, {
      selectedUser: {
        $set: action.payload //The action comes from the action.js and the payload is what it arrived with from the actial userlist.js container.
      }
    })
    case ACCOUNT_SELECTED:
    return update(state, {
      selectedAccount: {
        $set: action.payload
      }
    })

    // case WITHDRAW_FUNDS:
    // return update(state, {
    //   selectedAccount: {
    //     balance:{
    //       $apply: function(balance){
    //         return balance - action.payload
    //       }
    //     }
    //   }
    // })

    case WITHDRAW_FUNDS:
    const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id); //find the index in the array where the user._id is the same as the selected user which is up in the state.
    const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id); //use the index of the user we selected to find the index of the account number that we put in the state with the ACCOUNT_SELECTED.
    return update(state, {
      users: {
        [userIdx]: {
          accounts: {
            [accountIdx]: {
              balance: {
                $apply: function(balance){
                  return balance - action.payload
                }
              }
            }
          }
        }
      }
    })
    default:
    return state;

  }
}



export default reducer;
