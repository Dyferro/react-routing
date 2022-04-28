import React from 'react'
import {
    Link,
} from 'react-router-dom'


const Nosotros = () => {

    const [personajes, setPersonajes] = React.useState([]);


    React.useEffect(() => {
        obtenerDatos();
    }, []);


    //Metodo usando TrY-CatCH
    /* const obtenerDatos = async () => {
         try {
             const data = await fetch('https://swapi.dev/api/films/');
             const users = await data.json();
             setEquipo(users.results);
         } catch (error) {
             console.log(error);
         }
     }*/

    //Metodo como Promesa
    const obtenerDatos = async () => {
        const data = await fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .catch((err) => (console.log(err)));
        setPersonajes(data.results);
    }


    return (
        <div>
            <h3>Personajes de Star War</h3>
            <ul>
                {
                    personajes.map((elem, index) => (
                        <li key={index}>
                            <Link to={`/personaje/${index + 1}`}>
                                {elem.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros