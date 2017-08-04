import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/reducer.js'

import AccountDetail from './container/AccountDetail'
import UserDetail from './container/UserDetail'
import UserList from './container/UserList'
import BaseLayout from './components/BaseLayout'

const createStoreWithMiddleware = applyMiddleware()(createStore)




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/users/:id/:accountID' component={AccountDetail} />
          <Route path='/users/:id' component={UserDetail} />
          <Route path='/users' component={UserList} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
