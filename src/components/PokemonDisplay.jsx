import React from "react";

const PokemonDisplay = ({ pokemon, loading , infoPokemon}) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => (
          <div className="card" key={item.id} onClick = {() => infoPokemon(item)}>
            <h2>{item.id}</h2>
            <img src={item.sprites.front_default} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))
      )}
    </>
  );
};

export default PokemonDisplay;
