import React from 'react';
import ListadoProyectos from '../proyectos/ListadoProyectos';
import NuevoProyecto from '../proyectos/NuevoProyecto';


const Sidebar = () => {
    return (
        <aside>
            <h1>
                MERN <span>TASKS</span>
            </h1>

            <NuevoProyecto></NuevoProyecto>

            <div className='proyectos'>
                <h2>Tus proyectos</h2>

                <ListadoProyectos></ListadoProyectos>
            </div>
        </aside>
    );
};

export default Sidebar;