import React, {Component} from 'react'
import styled from 'styled-components'
import API from '../utils/API';
import POSTER from '../utils/POSTER_API';
import {
  Image,
  
  Segment,
  

} from 'semantic-ui-react'



//Styled-Components

const Homepageheadingbg = styled.div`
background-image: linear-gradient(to top, #040d1c, #0d1522, #131b29, #192230, #1f2837);
min-height:600px;
max-height:600px;
width:100%; 
`
const Imagestyle = styled.div`

padding:75px;
min-height: 600px;
max-height: 600px;
`


export default class Header extends Component {

    state = {
      result: {},
      search: "",
      
    };
    componentDidMount() {
      this.topMovies("Incredibles 2");
      
    }

    topMovies = query => {
      API.search(query)
        .then(res => this.setState({result : res.data}))
        .catch(err => console.log(err));
    };


  render() {
    return (
      <Homepageheadingbg>
        <Imagestyle>
        <Image size='medium' centered
          src={this.state.result.Poster} />      
        </Imagestyle>
      </Homepageheadingbg>
    );
  }
     
}