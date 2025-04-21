import React from 'react';
import { Link } from 'react-router';

const Card = ({ content }) => {
    const { id, price, name } = content;
    return (
        <div className="card w-70 h-72 py-1.5 bg-base-100 card-sm shadow-sm rounded-2xl">
            <div className="p-5">
                <img src="https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1" alt="" className='bg-gray-500 p-2 rounded-2xl' />
                <h2 className="text-lg font-bold p-0 m-0">{name}</h2>
                <span className='text-lg font-semibold text-gray-500'>Price: ${price}</span>
                <div className="justify-start card-actions">
                    <Link to={`/details/${id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;