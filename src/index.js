import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory ,IndexRoute } from 'react-router'
import Home from './App'
import ErrorPage from './condition/Error'
import Success from './condition/Success'
import Register from './Register'
import Agreement from './Agreement'
import Login from './Login'
import Change from './Change'


render((
    <Router history={browserHistory }>
        <Route path="/" >
            <IndexRoute component={Home}/>
            <Route path="error" component={ErrorPage} />
            <Route path="success" component={Success} />
            <Route path="register" component={Register} />
            <Route path="login" component={Login} />
            <Route path="register/agreement" component={Agreement}/>
            <Route path="change" component={Change}>
            </Route>
        </Route>
    </Router>
), document.getElementById('container'));



