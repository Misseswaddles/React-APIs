import React, { Component } from 'react';
import Character from './character/character.js';
import CharacterId from './character/characterid.js';
import Planets from './planets/Planets.js';
import {
  BrowserRouter as Router, Route, Link 
} from "react-router-dom";

//modified below to specifically look at a new hope
//modified the api to only call A new hope.
//next need to create a character.js that 

//change back to all films
//put modifications for a new hope (single film) into a new component. 
//cover page should include image and name only
//need to create a character component that fetches the people API and renders their page


//You are going to use component will mount to make api call
// 
//npm install --save react-router-dom

/*below is a quick functional component to be used to test router*/
const Character_sample = () => <p>This is a character sample </p>;


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      // films : [], //this will be an empty array of objects
      // characters: []
      myFilm:{},
      myCharacters: []
    };
  }


  //use fetch below here, not in constructor. 
  //Component happens after constructor, but after the render.
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

  render() {
    console.log('myFilm', this.state.myFilm);
    console.log("myCharacters", this.state.myCharacters.characters);
    return (
      <div className="App">
        {/*put the stuff below into character*/}
        {/*wherever you place this router is where it will render  */}
        {/*All router components need to be in a div*/}
        {/*router can only have one router component. in fact*/ }
        {/*YOu will get a child error if you add comments within router*/}
        {/*put people over router. Make function to feed image here  */}
        {/*pass people images to the character page*/} 
    {/*this.state.people.map(people => <div>{people.name}</div>) */}
    {/*Important! the route path specified for objects has a specific syntax
    and to get people.name, you have to have path='/people/:name' */}
        <div>
          {/* {this.state.films.map(film =>
          <div>
          <h2>{film.title}</h2>
          <p>{film.characters}</p>
          </div>
          )} */}
          <h2>{this.state.myFilm.title}</h2>
          {this.state.myCharacters.map(characters =><p>{characters}</p>)}
          </div>
              <div>   
                <Router> 
                    <div> 
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/character">Character</Link>
                        </li>
                        <li>
                          <Link to="/Planets">Planets</Link>
                        </li>
                      </ul>
                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/character"  comonent={Character} />
                    <Route path="/Planets" component={Planets} />

                    {/* <Route path="/character" component={CharacterId} /> */}
                    
                    {/* <Route path="/people/:characters" component={CharacterId} /> */}
                    </div>
                  </Router>
              </div>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
