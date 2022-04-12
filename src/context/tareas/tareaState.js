import React, { useReducer } from 'react'
import TareaReducer from "./tareaReducer";
import TareaContext from "./tareaContext";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Ejemplo tarea 1', estado: true, proyectoId: 1 },
            { nombre: 'Ejemplo tarea 2', estado: true, proyectoId: 2 },
            { nombre: 'Ejemplo tarea 3', estado: false, proyectoId: 3 },
            { nombre: 'Ejemplo tarea 4', estado: false, proyectoId: 4 },
            { nombre: 'Ejemplo tarea 1_', estado: true, proyectoId: 1 },
            { nombre: 'Ejemplo tarea 2_', estado: true, proyectoId: 2 },
            { nombre: 'Ejemplo tarea 3_', estado: false, proyectoId: 3 },
            { nombre: 'Ejemplo tarea 4_', estado: false, proyectoId: 4 }
        ],
        tareasproyecto: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea= tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;