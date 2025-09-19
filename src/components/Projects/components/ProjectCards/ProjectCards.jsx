import React, { useRef } from "react";
import "./project-cards.scss";

const projects = [
    { id: 1, title: "Prime Cleaning", link: "https://alexandracampo.github.io/prime-cleaning/", img: "cleaning.JPG" },
    { id: 2, title: "Memory", link: "https://alexandracampo.github.io/memory/", img: "memory.jpg" },
    { id: 3, title: "Adivina el número", link: "https://alexandracampo.github.io/adivina-el-numero/", img: "number.jpg" },
    { id: 4, title: "Consulta el tiempo", link: "https://alexandracampo.github.io/weatherInfo/", img: "weather.jpg" },
    { id: 5, title: "To do list", link: "https://alexandracampo.github.io/lista-tareas/", img: "todo.jpg" },
    { id: 6, title: "Tus proyectos", link: "https://alexandracampo.github.io/web-de-proyectos/", img: "proyectos.JPG" },
    { id: 7, title: "Tu tarjeta de visita", link: "https://alexandracampo.github.io/web-tarjetas-de-visita/", img: "tarjetas.JPG" },
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
        <>
            <div id="projects" className="header-projects">
                <h3 className="title-projects"> Mis <span className="color-text">proyectos</span> en GitHub: </h3>
                <p className="text-projects">Aquí tienes acceso a mis proyectos, algunos están en proceso de construcción, así que no te asustes si ves un diseño que parece de los 90 😜
                    <br />
                    <br />
                    Las tecnologías que he utilizado en mis proyectos son: React, Javascript, HTML, CSS/Sass, Tailwind, Testing Library, Jest, Typescript. En el lado del backend: MongoDB, Node.js, Express,

                </p>


            </div>



            <div className="carousel-container"   >
                <button className="scroll-button left" onClick={() => scrollCarousel(-1)}>
                    {/*  &lt; */}
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
                    {/* &gt; */}
                </button>
            </div>
        </>
    );
};

export default ProjectCards;
