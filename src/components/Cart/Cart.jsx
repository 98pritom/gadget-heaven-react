import React, { useEffect, useState } from 'react';
import CartNwishlist from '../CartNwishlist/CartNwishlist';
import Modal from '../Modal/Modal';

const Cart = () => {
    const [cartLists, setCartlist] = useState([]);
    const [allGadgets, setAllGadgets] = useState([]);

    useEffect(() => {
        const cartlistData = JSON.parse(localStorage.getItem('cart-list'));
        setCartlist(cartlistData);

        fetch('gadgetsData.json')
            .then(res => res.json())
            .then(data => setAllGadgets(data))
    }, []);

    const handlePurchase = () => {
        console.log('items purchased');
        <Modal></Modal>
        setCartlist([]);
    }

    const filteredCart = allGadgets.filter(gadgets => cartLists.includes(gadgets.id));
    console.log(filteredCart);

    const totalCost = filteredCart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <div>
            <div className='flex justify-between mt-5 mx-10 items-center'>
                <h2 className='text-lg font-bold p-2'>Cart: {cartLists.length}</h2>
                <div className='flex items-center gap-5'>
                    <h2 className='text-xl font-semibold'>Total Cost: {totalCost}</h2>
                    <button onClick={handlePurchase} className='btn bg-purple-500 text-white rounded-2xl'>Purchase</button>
                </div>
            </div>
            <div className='space-y-2'>
                {
                    filteredCart.map(gadgets => <CartNwishlist key={gadgets.id} content={gadgets}></CartNwishlist>)
                }
            </div>
        </div>
    );
};

export default Cart;