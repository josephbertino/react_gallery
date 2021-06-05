import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import SearchForm from './SearchForm';
import NavList from './NavList';
import Container from './Container';

import apiKey from './config';
import './App.css';

function App() {
  const queries = ['Koons', 'Basquiat', 'Klee']
  const [urlList, setUrlList] = useState([]);

  return (
    <BrowserRouter >
      <div className="container">
        <Header />
        <SearchForm />
        <NavList queries={queries}/>
        <Switch >
          <Route path={`/:query`} render={(props) => <Container {...props} apiKey={apiKey}/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
