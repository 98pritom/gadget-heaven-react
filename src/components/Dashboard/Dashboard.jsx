import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
// import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
    const [dashboardContent, setDashboardContent] = useState('cart');
    const handleCart = (content) => {
        setDashboardContent(content);
    }
    console.log(dashboardContent);
    return (
        <div>
            <div className='bg-purple-500 p-8 space-y-5'>
                <h1 className='text-center text-2xl font-extrabold text-white'>Dashboard</h1>
                <p className='text-center text-lg text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={() => handleCart('cart')} className='btn rounded-4xl px-10'>Cart</button>
                    <button onClick={() => handleCart('wishlist')} className='btn rounded-4xl px-10 bg-purple-400 text-white'>Wishlist</button>
                </div>
            </div>
            <div>
                {
                    dashboardContent === 'cart' ? <Cart></Cart>
                        : <Wishlist></Wishlist>
                }
            </div>
        </div>
    );
};

export default Dashboard;