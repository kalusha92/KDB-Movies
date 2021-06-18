import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
//import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Fulllayout from './layouts/fulllayout.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './assets/scss/style.css';
import SignIn from './views/signin/signin.jsx';
import SignUp from './views/signup/signup';

//const hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/ui-components' component={Fulllayout} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));     
