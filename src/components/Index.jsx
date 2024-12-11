import React from "react";
import PokemonDisplay from "./PokemonDisplay";
import PokeInfo from "./PokemonInfo";

const Index = () => {
    return(
        <>
        <div className ="container">
            <div className="left-content">
                <PokemonDisplay />
                <PokemonDisplay />
                <PokemonDisplay />
            </div>

            <div className="right-content">
                <PokeInfo />

            </div>

        </div>
        
        </>
    )
}

export default Index;