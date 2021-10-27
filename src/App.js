import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar.jsx'
import axios from 'axios';
import './App.css';
import Characters from './Components/Characters.jsx'
import Pagination from './Components/Pagination.jsx'
import Persona from './Components/Persona.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const url = "https://rickandmortyapi.com/api/character"
  const [loading, setLoading] = useState(true)


  // FILTRO
  const [cardsCharacters, setCardsCharacters] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const filtroBusqueda = (e) => {
      setBusqueda(e.target.value)
      filtrar(e.target.value)        
    }
  
  const filtrar = (terminoBusqueda) => {
    let resultadosBusquedaCharacters = cardsCharacters.filter(elemento => {
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    })
    setCharacters(resultadosBusquedaCharacters)
  }

   const loadCharacters = async(url) => { 
      await axios
        .get(url) 
        .then((data) => {
            setCharacters(data.data.results);
            setInfo(data.data.info);
            setLoading(false)
            setCardsCharacters(data.data.results)
            console.log(data.data.results)
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
    //setLoading(false)
  },[])

  
  const bG = "https://i.postimg.cc/SNBBs7J4/rm.png"
  const imagen = {
    backgroundImage: `url(${bG}})`
  
  }

  return (
    <>
    <Router>

      <Switch>

        <Route path="/" exact>
          <Navbar brand={<img src={bG} alt=""/>}></Navbar>          
          <div className="principal">
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>  

            <Characters characters={characters} loading={loading} filtroBusqueda={filtroBusqueda}></Characters>                 
                 
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
