import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import CategoryContent from '../CategoryContent/CategoryContent';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleCategorySelect = (handleCategorySelect) => {
        setSelectedCategory(handleCategorySelect);
    }
    console.log(selectedCategory);
    return (
        <div>
            <Banner></Banner>
            <div className='flex'>
                <div className='w-3/12'>
                    <CategoryList onSelectCategory={handleCategorySelect}></CategoryList>
                </div>
                <div className='w-9/12'>
                    <CategoryContent selectedCategory={selectedCategory}></CategoryContent>
                </div>
            </div>
        </div>
    );
};

export default Home;