import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Muese'},
        {nombre: 'Acaramaleade'}
    ]

    return (
        <ul className='listado-proyectos'>
            {proyectos.map( proyecto => (
                <Proyecto proyecto={proyecto}></Proyecto>
            ))}
        </ul>
    );
};

export default ListadoProyectos;