import React from 'react';

const SelectBox = ({ options }) => {
    return (
        <div>
            <select>
                {
                    options.map(opt => <option value={opt.value}>{opt.label}</option>)
                }
            </select>
        </div>

    )
}

export default SelectBox;