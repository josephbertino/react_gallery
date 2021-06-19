import React, { useState } from 'react';
import axios from 'axios';
import {
  Route,
  Switch
} from 'react-router-dom';

import apiKey from './config';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import LinksList from './Components/LinksList';
import ResultList from './Components/ResultList';
import ErrorPage from './Components/ErrorPage';

import './App.css';

// Stateful component
const App = () => {

  const queries = ['Chihuahua', 'Pomeranian', 'Weimaraner'];
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // This function is complicated.
  // First, it sets the page's title according to the query.
  // Then it sets loading=true so that the ResultList route can display "Loading..."
  // Then it fetches the data from the Flickr API.
  // Once it parses the response, it sets loading=false and saves the results in the state
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
    <div className="container">
      <Header />
      <SearchForm />
      <LinksList queries={queries} />
      <Switch >
        <Route exact path='/' render={() => {document.title = "React Gallery App"}} />
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
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
