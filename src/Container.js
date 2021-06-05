import React, { Component } from 'react';
import {
  useParams,
} from 'react-router-dom';
import axios from 'axios';

import Photo from './Photo';
import NotFound from './NotFound';
import PropTypes from 'prop-types';

const Container = props => {
  let pathName = <li>{props.location.pathname}</li>;
  let { query } = useParams();
  
  console.log(`The query is "${query}"`)
  
  const performSearch = (query) => { 
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${props.apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos.photo)
        this.setState({
          gifs: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  return (
    <div className="photo-container">
      <h2>{query}</h2>
      <ul>
        {pathName}
      </ul>
    </div>
  )
}

Container.propTypes = {
  urlList: PropTypes.arrayOf(PropTypes.string)
}

export default Container;

// photos = [
//   {
//     farm: 0,
//     id: "51224965693",
// ​​    isfamily: 0,
// ​​    isfriend: 0,
// ​​    ispublic: 1,
// ​​    owner: "84782954@N00",
// ​​    secret: "fc6392eb6e",
// ​​    server: "0",
// ​​    title: "2021-02-20_Basquiat painting party_00008"
//   }
// ]