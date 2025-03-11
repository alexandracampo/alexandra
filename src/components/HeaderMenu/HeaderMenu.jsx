import React from 'react'
import '../HeaderMenu/header-menu.scss'

const HeaderMenu = () => {
    return (
        <div className='header'>
            <nav className='nav'>
                <a href="#presentation">Sobre mí</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
        </div>
    )
}

export default HeaderMenu
