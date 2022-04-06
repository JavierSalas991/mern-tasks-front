import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Ejemplo tarea 1', estado: true },
        { nombre: 'Ejemplo tarea 2', estado: true },
        { nombre: 'Ejemplo tarea 3', estado: false },
        { nombre: 'Ejemplo tarea 4', estado: false }
    ]

    return (
        <>
            <h2>Proyecto: Ejemplo proyecto</h2>
            <ul className='listado-tareas'>
                {tareasProyecto.length === 0 ?
                    <li className='tarea'><p>No hay tareas</p></li>
                    :
                    tareasProyecto.map((tarea) => {
                        return <Tarea tarea={tarea}></Tarea>
                    })
                }
            </ul>
            <button type='button' className='btn btn-eliminar'>Eliminar proyecto &times;</button>
        </>
    );
};

export default ListadoTareas;