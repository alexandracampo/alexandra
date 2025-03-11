import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {


    return (
        <section id="contact" className="contact-section">
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
        </section>
    );
};

export default Contact;
