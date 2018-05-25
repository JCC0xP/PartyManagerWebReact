import React from 'react';
import { Route, Router, Redirect, browserHistory } from 'react-router';

import Dashboard from '../components/Dashboard/index';
import RegisterDecoration from '../components/RegisterDecoration/index';
import RegisterAllocation from '../components/RegisterAllocation/index';
import CalendarAllAllocations from '../components/Calendaries/CalendarViewAllAllocations/index';

export default () => (
    <Router history={browserHistory}>
        <Route path='/' component={Dashboard}>
            <Route path='/home' component={CalendarAllAllocations} />
            <Route path='/cadastrar_decoracoes' component={RegisterDecoration} />
            <Route path='/cadastrar_reservas' component={RegisterAllocation} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
);
