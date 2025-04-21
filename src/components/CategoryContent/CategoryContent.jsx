import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const CategoryContent = ({ selectedCategory }) => {
    const [contents, setContent] = useState([]);

    useEffect(() => {
        fetch('gadgetsData.json')
            .then(res => res.json())
            .then(data => setContent(data))
    }, []);

    const filteredContent = contents.filter(content => selectedCategory.includes(content.category));
    console.log(filteredContent);

    return (
        <div>
            <h2>Content</h2>
            <p>{selectedCategory}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-5'>
                {
                    selectedCategory === 'all' ?
                        contents.map(content => <Card key={content.id} content={content}></Card>)
                        : filteredContent.map(content => <Card key={content.id} content={content}></Card>)
                }
            </div>
        </div>
    );
};

export default CategoryContent;