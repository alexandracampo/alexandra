import React from 'react';
import '../Welcome/welcome.scss';

const Welcome = () => {
    return (
        <div className="welcome" >
            <h1 className="welcome__title">Hola, me llamo <span className='color-text' >Alexandra</span> y me dedico al <span className='color-text'  >desarrollo de software.</span></h1>

            <p className="welcome__text">
                Actualmente resido en
                <span className="tooltip" data-tooltip="España 🌍">
                    &nbsp;ES&nbsp;
                </span>
                y trabajo en el sector tecnológico como desarrolladora frontend.
                Aquí puedes conocer algunos de mis proyectos y si tienes una idea para tu sitio web <a href="#contact" className='button-contact'>contacta conmigo</a> y daremos forma a lo que tengas en mente.
                Bienvenid@.
            </p>


            <img className="welcome__image" src="me.png" alt="Alexandra en un dibujo" />
        </div>
    );
};

export default Welcome;
