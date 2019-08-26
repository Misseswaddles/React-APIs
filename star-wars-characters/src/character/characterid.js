import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class CharacterId extends Component{
    constructor(props){
        super(props);
        this.state = {
            people: {}
        }
    }

    componentDidMount () { //set aside for setup of component.
       
        fetch('https://swapi.co/api/people/?page=1')
        .then(response => response.json())
        .then(data => {
          console.log('the data', data);
          this.setState((prevState,props) => {
            return{
              people: data.results //each people array is an object
            };
          });
        })
        .catch(error => console.log('the error', error)); 
        }

    render() {
      console.log("Character iD props", this.props);
      //console.log('Character Id', people.name);
      return (
        <div>
          <h2>Character ID!</h2>
          <div>{}</div>
          </div>
      )
    }
  
  }


  export default CharacterId;