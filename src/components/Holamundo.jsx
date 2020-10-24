import React from 'react';

import Button from './Button';

const Holamundo = () => {

    //const Hello = 'Hola mundo'
    const isTrue = false;
    return (
        <>
            <div className='Hola-mundo'>
                <h1>Curso escencial de React</h1>
                <img src="https://arepa.s3.amazonaws.com/react.png" alt="Imagen" />
                {/*Renderizado condicional*/}
                {isTrue ? <h4>Es verdadero</h4> : <h4>Es falso</h4>}
                {isTrue && <h5>Soy verdadero</h5>}
                <Button text='Buena' />
            </div>
        </>
    )
}

export default Holamundo;