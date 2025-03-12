import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {


    return (
        <section className="contact-section" id="contact">
            <h3 className="title"><span className="color-text">Contacta</span> conmigo:</h3>

            <div className="contact-form-container">
                <form
                    className="contact-form"
                    action="https://formspree.io/f/xnnpqzla"
                    method="POST"
                >
                    <label htmlFor="name" className="contact-label">Nombre:</label>
                    <input type="text" id="name" name="name" className="contact-input" required />

                    <label htmlFor="email" className="contact-label">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" className="contact-input" required />

                    <label htmlFor="message" className="contact-label">Mensaje:</label>
                    <textarea id="message" name="message" className="contact-textarea" required />

                    <button type="submit" className="contact-button">Enviar Mensaje</button>
                </form>


            </div>

            <div className="links">
                <a href="https://github.com/alexandracampo" target="_blank" rel="noopener noreferrer" ><img src="github.png" alt="Ir a github de Alexandra" className="icon-github" /></a>
                <a href="https://www.linkedin.com/in/alexandracampomatilla/" target="_blank" rel="noopener noreferrer" ><img src="linkedin.png" alt="Ir a linkedin de Alexandra" className="icon-linkedin" /></a>
                <a href="curriculum.pdf" target="_blank" rel="noopener noreferrer" ><img src="cv.png" alt="Ver PDF" className="icon-pdf" /></a>
            </div>

        </section>
    );
};

export default Contact;
