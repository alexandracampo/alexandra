import React from 'react';
import '../Welcome/welcome.scss';

const Welcome = () => {
    return (
        <div className="welcome" id="presentation">


            <h1 className="welcome__title">Hola, me llamo <span className='color-text' >Alexandra</span> y me dedico al <span className='color-text'  >desarrollo de software.</span></h1>

            <p className="welcome__text">
                Actualmente resido en
                <span className="tooltip" data-tooltip="España 🌍">
                    &nbsp;ES&nbsp;
                </span>
                y trabajo para una empresa del sector bancario.
                Más abajo tienes acceso a proyectos que he ido creando, te invito a conocerlos.
                No dudes en contactarme si quieres saber más.
            </p>


            <img className="welcome__image" src="me.png" alt="Alexandra en un dibujo" />
        </div>
    );
};

export default Welcome;
