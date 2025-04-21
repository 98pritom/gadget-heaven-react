import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredCartList, addToStoredWishList } from '../../utility/addToDb';


const Details = () => {
    const allData = useLoaderData();
    console.log(allData);
    const { id } = useParams();
    const idInt = parseInt(id);
    const selectedDetails = allData.find(data => data.id === idInt);
    console.log(selectedDetails);
    const { availability, rating, details, price, name, specifications } = selectedDetails;

    const handleCart = (id) => {
        addToStoredCartList(id);
    }

    const handleWish = (id) => {
        addToStoredWishList(id)
    }

    return (
        <div className=''>
            <h2 className='text-center text-2xl font-bold m-5'>Product Details</h2>
            <div className='flex'>
                <div>
                    <img src="https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg" alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p className='font-semibold text-xl text-gray-500'>Price: ${price}</p>
                    <span className='font-bold'>Availability: </span>
                    <span className='font-semibold text-gray-500'>{availability}</span>
                    <p className='text-gray-500'>{details}</p>
                    <div>
                        <h2 className='text-lg font-semibold'>Specifications</h2>
                        {
                            Object.entries(specifications).map(([key, value]) => (
                                <p key={key}><span className='font-semibold'>{key}</span>: {value}</p>
                            ))
                        }

                    </div>
                    <p className='font-bold'>Rating: {rating}/5</p>
                    <div className='mt-2'>
                        <button onClick={() => handleCart(idInt)} className='btn rounded-2xl mr-2'>Add To Cart</button>
                        <button onClick={() => handleWish(idInt)} className='btn rounded-2xl'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <h2 className='text-2xl font-bold'>Gadget Heaven</h2>
                <p className='text-lg text-gray-600 font-semibold'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
        </div >
    );
};

export default Details;