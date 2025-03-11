import React, { useRef } from "react";
import "./project-cards.scss";

const projects = [
    { id: 1, title: "Prime Cleaning", link: "https://github.com/alexandracampo/prime-cleaning", img: "/cleaning.JPG" },
    { id: 2, title: "Memory", link: "https://github.com/alexandracampo/memory", img: "/memory.jpg" },
    { id: 3, title: "Adivina el número", link: "https://github.com/alexandracampo/adivina-el-numero", img: "/number.jpg" },
    { id: 4, title: "Consulta el tiempo", link: "https://github.com/alexandracampo/weatherInfo", img: "/weather.jpg" },
    { id: 5, title: "To do list", link: "https://github.com/alexandracampo/lista-tareas", img: "/todo.jpg" },
    { id: 6, title: "Tus proyectos", link: "https://github.com/alexandracampo/web-de-proyectos", img: "/proyectos.JPG" },
    { id: 6, title: "Tu tarjeta de visita", link: "https://github.com/alexandracampo/web-tarjetas-de-visita", img: "/tarjetas.JPG" },
];

const ProjectCards = () => {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        const scrollAmount = 200;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += direction * scrollAmount;
        }
    };

    return (
        <div className="carousel-container">
            <button className="scroll-button left" onClick={() => scrollCarousel(-1)}>
                &lt;
            </button>
            <div className="carousel" ref={carouselRef}>
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                    >
                        <img src={project.img} alt={project.title} />
                        <h3 className="title-card">{project.title}</h3>
                    </a>
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scrollCarousel(1)}>
                &gt;
            </button>
        </div>
    );
};

export default ProjectCards;
