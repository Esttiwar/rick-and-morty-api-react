import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar.jsx'
import axios from 'axios';
import './App.css';
import Characters from './Components/Characters.jsx'
import Pagination from './Components/Pagination.jsx'



function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const url = "https://rickandmortyapi.com/api/character"
  
  // const loadCharacters = (ulr) => {
    
  //   fetch(ulr)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCharacters(data.results)
  //       setInfo(data.info)
  //     })
  //     .catch((error) => console.log(error));
  // }

   const loadCharacters = (url) => { 
       axios
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
    <Navbar brand="Rick And Morty"></Navbar>
    <div className="bg-pink-600">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>
      <Characters characters={characters}></Characters>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>
    </div>
    </>
  );
}


export default App;
