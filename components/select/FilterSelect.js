"use client"
import React from 'react';
import Select from 'react-select';

const FilterSelect = ({ data, setData }) => {
    const options = [
        { value: 'Price: Low to High', label: 'Price: Low to High', sortBy: 'asc' },
        { value: 'Price: High to Low', label: 'Price: High to Low', sortBy: 'desc' },
        { value: 'Discount', label: 'Discount' }
    ];

    const handleOptionChange = (selectedOption) => {
        if (selectedOption.sortBy === 'asc') {
            setData([...data].sort((a, b) => a.price - b.price));
        } else if (selectedOption.sortBy === 'desc') {
            setData([...data].sort((a, b) => b.price - a.price));
        } else {
        }
    };

    return (
        <div className='w-52'>
            <Select
                options={options}
                onChange={handleOptionChange}
            />
        </div>
    );
};

export default FilterSelect;
