import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

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
            <h1>Cargando</h1>
        )
    }if (!loading && !character){
        return (
            <h1>Personaje no encontrado</h1>
        )
    }

    return (
        <div>
            <h1>{character.name} </h1>
        </div>
    )
}

export default Persona
