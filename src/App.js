import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar.jsx'
import axios from 'axios';
import './App.css';
import Characters from './Components/Characters.jsx'
import Pagination from './Components/Pagination.jsx'
import Persona from './Components/Persona.jsx';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';



function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const url = "https://rickandmortyapi.com/api/character"

   const loadCharacters = async(url) => { 
      await axios
        .get(url) 
        .then((data) => {
            setCharacters(data.data.results);
            setInfo(data.data.info);
        }) 
        .catch((error) => {
        console.log(error);
      })
   }
 
   const onNext = () => {
     loadCharacters(info.next)
   }
  
  const onPrevious = () => {
    loadCharacters(info.prev)
  }

  useEffect(() => {
    loadCharacters(url)
  },[])


  return (
    <>
    <Router>

      <Switch>

        <Route path="/" exact>
          <Navbar brand="Rick And Morty"></Navbar>          
          <div className="bg-pink-600">
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>  
            
            <Characters characters={characters}></Characters>                 
                 
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>
          </div>
        </Route> 


        <Route path="/personaje/:id">
          <Persona characters={characters}></Persona>
        </Route>

      </Switch> 

    </Router>
    </>
  );
}


export default App;
