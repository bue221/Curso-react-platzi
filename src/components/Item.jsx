import React from 'react'
import PropTypes from 'prop-types';

import '../assets/styles/App.css';
import play from '../assets/play-icon.png';
import plus from '../assets/plus-icon.png';



export const Item = ({ title, cover, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={play} alt="Play Icon" />
                <img className="carousel-item__details--img" src={plus} alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
        </div>
    </div>
);

Item.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}
