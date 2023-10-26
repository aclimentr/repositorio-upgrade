import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import './CharactersPage.scss'
import { Pagination } from "../../components/Pagination/Pagination";

// import React, { useEffect } from 'react'


export default function CharactersPage(){
    
const[characters, setCharacters] = useState([]);
const[filterCharacters, setFilterCharacters] = useState([]);
const[counter, setCounter] = useState(1);

useEffect(() => {
    const getCharacters = async () => {
        const {data: {results}} = await axios(`https://rickandmortyapi.com/api/character?page=${counter}`);
        setCharacters(results);
        setFilterCharacters(results);
        // console.log(results);
    }
        getCharacters();
    }
    ,[counter])

    const filteredCharacters = (e) => {
        const filtrados = characters.filter((character)=>
        character.name.toLowerCase().includes(e.toLowerCase()))
    setFilterCharacters(filtrados);
    }
    


    return (     
    <div className="paginationdiv">
        
    <div className="inputodiv">    
    <input className="inputo" placeholder="busca tu personaje" type="text" onChange={(e)=>filteredCharacters(e.target.value)}/>
        <Pagination counter={counter} setCounter={setCounter}/>
        <Gallery data={filterCharacters}/>
    </div>
    </div>
    )}
