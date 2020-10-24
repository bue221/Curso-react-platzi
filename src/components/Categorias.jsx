import React from 'react';

import '../assets/styles/App.css';

export const Categorias = ({ children, text }) => (
    <div className="categoria">
        <h2 className="categories__title">{text}</h2>
        {children}
    </div>
);
