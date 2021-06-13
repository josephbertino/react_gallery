import React, { useState } from 'react';
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

const App = () => {

  const queries = ['Apple', 'Banana', 'Carrot'];
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const performFetch = (query) => { 
    document.title = `Results: ${query}`;
    setLoading(true);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        setResults(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      }); 
  }

  return (
    <BrowserRouter >
      <div className="container">
        <Header />
        <SearchForm />
        <LinksList queries={queries} />
        <Route exact path='/' render={() => document.title = "React Gallery App"} />
        <Route 
          path={`/:query`} 
          render={(props) => 
            <ResultList 
              {...props} 
              performFetch={performFetch}
              results={results}
              loading={loading}
            /> 
          }
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
