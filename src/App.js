import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'

//component imports
import Cart from './components/Cart/Cart'
import Payment from './components/Payment/Payment'

const App = () => {
  return (
    <div className="contentWrapper">
      {/* <header>Some header</header> */}
      <main>
        <Route exact path={'/'}/>
        <Switch>
          <Route exact path={'/cart'} component={Cart}/>
          <Route exact path={'/payment'} component={Payment}/>
        </Switch>
      </main>
      {/* <footer>Some footer</footer> */}
    </div>
  );
}

export default App;
