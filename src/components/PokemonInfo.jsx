import React from "react";

const PokeInfo=({data})=> {
    console.log(data);
    return (
        <>

        {
            (!data) ? "" : (
                <>
                     <h1> {data.name} </h1>
        <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg `} alt=""/>

        <div className="abilities" >
        <h2 style={{color: "black" }}> Abilities: </h2>
 
            {
                    data.abilities.map(poke => {

                        return (
                            <>
                             <div className="group">
                                  <h2> {poke.ability.name} </h2>

                            </div>
                            </>
                        )
                    })
                
            }
           

        </div>


                </>
            )
        }


       
        </>
    )
}

export default PokeInfo;