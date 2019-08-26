import React, { Component } from 'react';

//this was an example of multiple fetch calls
//this coincides with 1:20 into Week 5 lecture
//could do this with the first two pages of the apis.
//follow this model to pull more characters.

class Planets extends Component {
    constructor(props){
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount() { //example of making multiple fetch calls. 
        //Below is how you could stick all three urls into  a variable rather
        //than hardcoding:
        /* const planetCalls = this.props.planetURLs.map(url => {
            return fetch(url).then(response => response.json())
        }); */
        Promise.all([
            fetch('https://swapi.co/api/planets/3/')
                .then(response => response.json()), //necessary to ensure you are getting json back
            fetch('https://swapi.co/api/planets/2/')
                .then(response => response.json()),
            fetch('https://swapi.co/api/planets/1/')
                .then(response => response.json())
        ]).then(planetsFromApi => {
            console.log(planetsFromApi);
            this.setState(() => {
                return {
                    planets: planetsFromApi
                }
            })   
            //console.log(planets)
        });
    }

    render(){
        return (
            <ul>
               {this.state.planets.map(planet => {
                   return <li>{planet.name}</li>;
               })} 
            </ul>
        )

    }

}

export default Planets;