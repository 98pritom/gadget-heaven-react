const getStoredCartList = () => {
    // read-list
    const storedCartListStr = localStorage.getItem('cart-list');
    if (storedCartListStr) {
        const storedCartList = JSON.parse(storedCartListStr);
        return storedCartList;
    } else {
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in cart');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
    }
}


const getStoredWishList = () => {
    // read-list
    const storedCartListStr = localStorage.getItem('wish-list');
    if (storedCartListStr) {
        const storedCartList = JSON.parse(storedCartListStr);
        return storedCartList;
    } else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in wishlist');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}
export { addToStoredCartList, addToStoredWishList };