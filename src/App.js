
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Characters from './components/Characters/Characters';
import Location from './components/Location/Location';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Pagination from './components/Pagination/Pagination';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState ({})

  const [location,setLocation] = useState ([]);
  
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const locationUrl = "https://rickandmortyapi.com/api/location";
    
  const fetchCharacters = (url) => {
        fetch (url)
            .then(response => response.json())
            .then (data => {
              setCharacters(data.results);
              setInfo(data.info);
            })
            .catch(error => console.log(error))
    };

    const onPrevious = () => {
      fetchCharacters(info.prev);
    }
    const onNext = () =>{
      fetchCharacters(info.next);
    }
    useEffect(() => {
        fetchCharacters(initialUrl);
    },[]) 


const fetchLocation = (url) => {
      fetch (url)
          .then(response => response.json())
          .then (data => {
            setLocation(data.results);
            setInfo(data.info);
          })
          .catch(error => console.log(error))
  };
  const onPreviousLoc = () => {
    fetchLocation(info.prev);
  }
  const onNextLoc = () =>{
    fetchLocation(info.next);
  }
  useEffect(() => {
    fetchLocation("https://rickandmortyapi.com/api/location");
},[]) 

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <NavBar/>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Routes>
          <Route path= "/" element= {<Main/>}/>
          <Route path= "/characters" element= {<Characters characters={characters} />}/>
          <Route path= "/location" element= {<Location location={location}/>}/>
          <Route path= "*" element={<NotFoundPage/>} />
          
        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
