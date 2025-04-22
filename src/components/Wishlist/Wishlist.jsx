import React, { useEffect, useState } from 'react';
import CartNwishlist from '../CartNwishlist/CartNwishlist';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [allGadgets, setAllGadgets] = useState([]);

    useEffect(() => {
        const wishlistData = JSON.parse(localStorage.getItem('wish-list'));
        setWishlist(wishlistData);

        fetch('gadgetsData.json')
            .then(res => res.json())
            .then(data => setAllGadgets(data))
    }, []);

    const selectedWishlist = allGadgets.filter(gadgets => wishlist.includes(gadgets.id))
    console.log(selectedWishlist);


    return (
        <div>
            <h2>Wishlist: {selectedWishlist.length}</h2>
            <div className='space-y-2'>
                {
                    selectedWishlist.map(wishList => <CartNwishlist key={wishList.id} content={wishList}></CartNwishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlist;