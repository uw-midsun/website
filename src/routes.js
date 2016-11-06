'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    {/*Soon to come pages
    <Route path="/Team" component={TeamPage}/>
    <Route path="/Cars" component={CarPage}/>
    <Route path="/Sponsors" component={SponsorPage}/>
    <Route path="/Events" component={EventPage}/> */}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
