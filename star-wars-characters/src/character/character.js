import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Character extends Component{



    componentDidMount () { //set aside for setup of component.
        fetch('https://swapi.co/api/films/1/')
         //you don't need a semicolon here, because
         //these function calls are being chained off each other.
        .then(response => response.json())
        .then(data => {
          console.log('the data', data);
          this.setState((prevState,props) => {
            return{
              // films: data.results //each people array is an object
              myFilm: data,
             myCharacters: data.characters
            };
          });
        })
        .catch(error => console.log('the error', error)); 
        }
    
    render(){
        return(
            <div>
            This is from Character 
            </div>
        ); //What you return
    }



}



export default Character;