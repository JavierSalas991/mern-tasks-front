import React from 'react';

const Barra = () => {
    return (
        <header className='app-header'>
            <p className='nombre-usuario'>
                Hola <span>Ejemplo de usuario</span>
            </p>

            <nav className='nav-principal'>
                <a>Cerrar Sesión</a>
            </nav>
        </header>
    );
};

export default Barra;