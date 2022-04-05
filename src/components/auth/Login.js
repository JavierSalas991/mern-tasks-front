import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const {email, password} = usuario;

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
                <h1>Iniciar Sesión</h1>

                <form onSubmit={onSubmit}>
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
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesión'
                        ></input>
                    </div>
                </form>

                <Link to='/nueva-cuenta' className='enlace-cuenta'>
                    Obtener cuenta
                </Link>
            </div>
        </div>
    );
};

export default Login;