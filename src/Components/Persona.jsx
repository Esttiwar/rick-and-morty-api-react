import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './Persona.css'

const Persona = ({characters}) => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const numberId = !!id ?Number(id) :null
        const selectedCharacter = characters.find((char) => char.id === numberId)

        setCharacter(selectedCharacter)
        setLoading(false)
    }, [id])

    if (loading){
        return (
            <h1 className='display flex justify-center'>
                <i className="fa-10x fas fa-sync fa-spin"></i>
            </h1>
        )
    }if (!loading && !character){
        return (
            <h1>Personaje no encontrado</h1>
        )
    }

    return (
        <div className='background md:w-full lg:w-full display flex flex-col items-center justify-center h-screen'>
            <div className='card lg:w-3/12 text-white display flex flex-col font-mono rounded-lg items-center text-center border border-black'>
                <div className='flex flex-col'>
                    <h1 className='my-5 text-3xl break-words'>{character.name}</h1>
                    <img className="image rounded-full mx-6 border border-black" src={character.image} alt={`profile image: ${character.image}`} />
                </div>
                <div className='pb-5'>
                    <h1 className='my-3'>Gender: {character.gender}</h1>
                    <h1 className='my-3'>Location: {character.location.name}</h1>
                    <h1 className='my-3'>Origen: {character.origin.name}</h1>
                    <h1 className='my-3'>Specie: {character.species}</h1>
                    <h1 className='my-3'>Origen: {character.status}</h1>
                </div>
            </div>
        </div>
    )
}

export default Persona
