import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';

import {
  BrowserRouter,
  Switch,
  Route,

} from 'react-router-dom';

const Page404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/video/register" component={RegisterVideo} />
      <Route path="/category/register" component={RegisterCategory} />
      <Route path="/" component={Home} exact />
      <Route component={Page404} />
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);