import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('gadgetsData.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    return (
        <div className='mb-5'>
            <h1 className="text-xl text-center font-bold mb-2">Statistics</h1>
            <div className="bg-gray-200 p-5 w-8/12 mx-auto rounded-2xl">
                <div className="flex justify-center">
                    <BarChart width={1200} height={600} data={allData}>
                        <Bar dataKey="price" fill="#8884d8" />
                        <XAxis dataKey='name'></XAxis>
                        <YAxis dataKey='price'></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
            </div>
        </div>

    );
};

export default Statistics;