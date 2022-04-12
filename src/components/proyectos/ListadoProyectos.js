import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext
   
    useEffect(() => {
      obtenerProyectos()
    }, [])

    if (proyectos.length === 0) return <p>No hay proyectos</p>;

    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto proyecto={proyecto}></Proyecto>
            ))}
        </ul>
    );
};

export default ListadoProyectos;