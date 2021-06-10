import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import apiKey from './config';
import Header from './Header';
import SearchForm from './SearchForm';
import LinksList from './LinksList';
import ResultList from './ResultList';

import './App.css';

class App extends Component {

  queries = ['Koons', 'Basquiat', 'Klee']

  performSearch(query) { 
    console.log(`Searching for ${query}`)

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos.photo)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      }); 
  }

  render () {
    console.log('rendering')
    return (
      <BrowserRouter >
        <div className="container">
          <Header />
          <SearchForm />
          <LinksList queries={this.queries} />
          <Route 
            path={`/:query`} 
            render={(props) => 
              <ResultList 
                {...props} 
                performSearch={this.performSearch} 
              /> 
            } 
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
