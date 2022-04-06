import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto, errorformulario, mostrarError } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        if (nombre === '') {
            mostrarError()
            return;
        }

        agregarProyecto(proyecto)

        guardarProyecto({
            nombre: ''
        })
    }


    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={() => mostrarFormulario()}
            >
                Nuevo proyecto
            </button>

            {formulario ?
                <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nuevo Proyecto'
                        onChange={onChangeProyecto}
                        name='nombre'
                    >
                    </input>

                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value={'Agregar proyecto'}
                    ></input>
                </form>
                : null}
            {errorformulario ?
                <p className='mensaje error'>Debe ingresar algo</p>
            : null}
        </>
    );
};

export default NuevoProyecto;