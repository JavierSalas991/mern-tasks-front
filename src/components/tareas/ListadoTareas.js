import React, { useContext, useEffect } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    useEffect(() => {
      console.log(tareasproyecto)
    }, [tareasproyecto])

    return (
        <>
            {proyecto  ?
                <>
                    <h2>Proyecto: {proyecto[0].nombre}</h2>
                    <ul className='listado-tareas'>
                        {tareasproyecto && tareasproyecto.length === 0 ?
                            <li className='tarea'><p>No hay tareas</p></li>
                            :
                            tareasproyecto.map((tarea) => {
                                return <Tarea tarea={tarea}></Tarea>
                            })
                        }
                    </ul>
                    <button onClick={ () => eliminarProyecto(proyecto[0].id)} type='button' className='btn btn-eliminar'>Eliminar proyecto &times;</button>
                </>
                :
                <h2>Seleccione un proyecto</h2>
            }

        </>
    );
};

export default ListadoTareas;