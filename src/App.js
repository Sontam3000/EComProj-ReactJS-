import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/homepage.component';
import CatPreview from './pages/CatPreview/catpreview.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
     
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/category_preview' component={CatPreview} />
      </Switch>
    </div>
  );
}

export default App;
