import React from 'react'

import '../assets/styles/App.css';

export const Carusel = ({ children }) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
);
