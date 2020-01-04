import React from 'react';
import SelectBox from '../selectbox';
import './styles.scss'

const SortBy = props => {

    const sortBy = [
        {
            value: '', label: 'Select'
        },
        {
            value: 'lowestprice', label: 'Lowest to highest'
        },
        {
            value: 'highestprice', label: 'Highest to lowest'
        }
    ]

    return (
        <div className="sorty-by-container">
            <div className="label-con">
            <label>Sort By</label>
            </div>
            <div className="selectbox-con">
            <SelectBox options={sortBy} label={'Sort By'} />
            </div>
            
        </div>
    )
}

export default SortBy;