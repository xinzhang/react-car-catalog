import React from 'react';

const CarDetail = ({car, ...props}) => (
    <div className="thumbnail paddingtop10">
        <img className="thumbnail-size" src={car.imageUrl} alt={car.name} height="200px" />
        <div className="caption">
            <hr />
            <h3>{car.name}</h3>
            <p>{car.maker}</p>
            <p>{car.price}</p>            
        </div>
    </div>
)

export default CarDetail