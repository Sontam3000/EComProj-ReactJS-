import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component';
import CatPreview from './pages/CatPreview/catpreview.component';
import Shop from './pages/shoppage/shopage.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';

function App() {
  return (
    <div className="App">
      <Header/>
     
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/category_preview/mobile' component={CatPreview} />
        <Route path='/shop' component={Shop} />
        <Route path='/sign-in-sign-up' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
