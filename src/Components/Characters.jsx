import React from 'react';



const Characters = ({characters}) => {
    return (
        <>
        <div className="w-full display flex flex-wrap justify-center">
            {characters.map(character => (              
                <div onClick={() => console.log(character)} key={character.id}>
                    <div className="m-3 p-3 border border-black display flex flex-col rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 cursor-pointer">
                        <div className="head-container rounded-lg display flex flex-col text-center mb-4 border border-black bg-red-600">
                            <img className="rounded-lg" src={character.image} alt="" />
                            <span className="font-black my-3">{character.name}</span>
                        </div>
                        <div className="body-container display flex flex-col">
                            <span>Specie: {character.species}</span>
                            <span>Gender: {character.gender}</span>
                            <span>Location: {character.location.name}</span>
                        </div>
                    </div>
                </div>                     
            ))}
        </div>
           
        </>
    )
}

export default Characters
