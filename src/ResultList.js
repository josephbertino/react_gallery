import React, { Component } from 'react';
import {
  useParams
} from 'react-router-dom';
import axios from 'axios';

import Result from './Result';
import NotFound from './NotFound';
import PropTypes from 'prop-types';

const ResultList = ( props ) => {

  const query = props.match.params.query
  console.log('calling the axios function')
  props.performSearch(query)
  
  // let pathName = <li>{props.location.pathname}</li>
  // let { query } = useParams();
  // console.log(`The query is "${query}"`)
  
  // return (
  //   <div className="photo-container">
  //     <h2>{query}</h2>
  //     <ul>
  //       {pathName}
  //     </ul>
  //   </div>
  // )
  return (
    <div>
      Hi
    </div>
  )
}

// ResultList.propTypes = {
//   urlList: PropTypes.arrayOf(PropTypes.string)
// }

export default ResultList;

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