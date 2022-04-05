import React, { useState } from 'react';

const NuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nembre: ''
    });

    const { nombre } = proyecto

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();
    }

    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >
                Nuevo proyecto
            </button>

            <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
                <input
                    type='text'
                    className='input-text'
                    placeholder='Nuevo Proyecto'
                    name='nombre'
                >
                </input>

                <input
                    type='submit'
                    className='btn btn-primario btn-block'
                    onChange={onChangeProyecto}
                    value={nombre}
                ></input>
            </form>
        </>
    );
};

export default NuevoProyecto;