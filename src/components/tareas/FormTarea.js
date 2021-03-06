import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    if (!proyecto) return null

    const onSubmit = e => {
        e.preventDefault()

        
    }

    return (

        <div className='formulario'>
            <form onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nembre tarea'
                        name='nombre'
                    ></input>
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Agregar tarea'
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default FormTarea;