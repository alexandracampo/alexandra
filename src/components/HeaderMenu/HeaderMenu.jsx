import React from 'react'
import '../HeaderMenu/header-menu.scss'

const HeaderMenu = () => {
    return (
        <div className='header'>
            <nav className='nav'>
                <a href="#presentation">Welcome</a>
                <a href="#projects" >Proyectos</a>
                <a href="#about" >Sobre mí</a>
            </nav>
        </div>
    )
}

export default HeaderMenu
