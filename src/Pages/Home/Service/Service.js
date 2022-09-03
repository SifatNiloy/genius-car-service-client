import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description} </small> </p>
            <button> book: {name} </button>
        </div>
    );
};

export default Service;