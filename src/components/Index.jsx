import React, { useState,useEffect } from "react";
import PokemonDisplay from "./PokemonDisplay";
import PokeInfo from "./PokemonInfo";
import axios from "axios"
import { use } from "react";

const Index = () => {

    const [pokemonData,setPokemonData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl,setNexturl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex,setPokeDex]= useState();

    const pokeFetch = async() => {
        setLoading(true);
        setPokemonData([]);
        const res = await axios.get(url);
        // console.log(res.data.results);
        setNexturl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        
    }

    

    const getPokemon = async(res) => {
        res.map(async (item) => {
            // console.log(item.url);
            const result = await axios.get(item.url);
            // console.log(result.data);
            
            setPokemonData (state => {
                state = [...state , result.data]
                state.sort((a,b) => a.id > b.id ? 1: -1)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFetch();
    },[url])
    return(
        <>
        <div className ="container">
            <div className="left-content">
                <PokemonDisplay pokemon={pokemonData} loading={loading}  infoPokemon= {pokem => setPokeDex(pokem)} />

                <div className="btn-group"> 
                  { prevUrl && <button onClick={() => {
                        setPokemonData([])
                        setUrl(prevUrl)
                    }}>Previous</button> }
                    { nextUrl && <button onClick={() => {
                        setPokemonData([])
                        setUrl(nextUrl)
                    }}>Next</button> }
                </div>
            </div>

            <div className="right-content">
                <PokeInfo data = {pokeDex}/>

            </div>

        </div>
        
        </>
    )
}

export default Index;