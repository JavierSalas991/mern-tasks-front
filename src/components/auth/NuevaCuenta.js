import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
       console.log(usuario)
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Nueva Cuenta</h1>

                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor='nombre'>NOMBRE Y APELLIDO</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Nombre y apellido'
                            onChange={onChange}
                            value={nombre}
                        ></input>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>E-MAIL</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu email'
                            onChange={onChange}
                            value={email}
                        ></input>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>PASSWORD</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='***'
                            onChange={onChange}
                            value={password}
                        ></input>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>CONFIRMAR PASSWORD</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='***'
                            onChange={onChange}
                            value={confirmar}
                        ></input>
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrarme'
                        ></input>
                    </div>
                </form>

                <Link to='/' className='enlace-cuenta'>
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;