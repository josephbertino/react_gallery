import React from 'react';
import axios from 'axios';

import apiKey from './config';
import PropTypes from 'prop-types';

class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    }
  }

  query = this.props.match.params.query

  render () {

    console.log(`The query is "${this.query}"`)
    
    const performSearch = (query) => { 
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          console.log(response.data.photos.photo)
          this.imgs = response.data.photos.photo
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });    
    }

    performSearch(this.query);
    
    return (
      <div className="photo-container">
        <h2>{this.query}</h2>
        <ul>
          <li>Test</li>
        </ul>
      </div>
    )
  }
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