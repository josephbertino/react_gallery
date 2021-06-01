import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoList from './PhotoList';

import apiKey from './config';
import logo from './logo.svg';
import './App.css';

function App() {
  const queries = ['Koons', 'Basquiat', 'Klee']
  return (
    <BrowserRouter >
      <SearchForm />
      <Nav queries={queries}/>
      <PhotoList srcList={[]}/>
    </BrowserRouter>
  );
}

export default App;
