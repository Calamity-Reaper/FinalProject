import React, {useEffect, useState} from 'react';
import './FilterBtn.css'

const FilterBtn = ({filterName, filter, setFilter}) => {
    return (
        <button className={filter[filterName] ? 'filter-btn active' : 'filter-btn'}
                onClick={() => {
                    setFilter({...filter, [filterName]: !filter[filterName]});
                }}
        >
            <div className='wrapper'><div className={filter[filterName] ? 'filter-btn_triangle active' : 'filter-btn_triangle'}/><span>•</span>{filterName}</div>
        </button>
    );
};

export default FilterBtn;