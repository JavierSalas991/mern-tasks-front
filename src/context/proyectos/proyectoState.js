import React, { useReducer } from "react";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO } from "../../types";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {v4} from 'uuid'

const ProyectoState = props => {

  const proyectos = [
    { nombre: 'Tienda Virtual', id: 1 },
    { nombre: 'Muese', id: 2 },
    { nombre: 'Acaramaleade', id: 3 }
  ]

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false
  }

  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  const agregarProyecto = proyecto => {
    console.log('se ejecuta agregarProyecto')
    proyecto.id = v4();
    //agregar el proyecto al state:
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })
  }

  const mostrarError = () => {
      dispatch({
        type: VALIDAR_FORMULARIO
      })
  }

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
