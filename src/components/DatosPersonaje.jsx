import React from 'react'
import { useParams } from 'react-router-dom'

const DatosPersonaje = () => {
    const { id } = useParams();
    const [personaje, setPersonaje] = React.useState({});

    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .catch((err) => (console.log(err)));
        setPersonaje(data);
    }

    return (
        <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <hr />
                <h4 className="text-center">Details:</h4>
                <strong>Hair color: </strong> {personaje.hair_color} <br />
                <strong>Skin color: </strong> {personaje.skin_color} <br />
                <strong>Eyes color: </strong> {personaje.eye_color} <br />
            </div>
        </div>
    )
}

export default DatosPersonaje