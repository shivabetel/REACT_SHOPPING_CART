import React, { useState } from 'react';

const Checkbox = props => {
    const [isChecked, setChecked] = useState(false)

    const { label, filterSelectionHandler } = props;

    const toggleCheckbox = () => {
        setChecked(!isChecked);
        filterSelectionHandler(label);
    }

    

    return (
        <div className="checkboxCon">
            <input type="checkbox" className="checkbox" checked={isChecked} value={label} onChange={toggleCheckbox} />
            <span className="checkmark">{label}</span>
            <style jsx>{
                `
            .checkboxCon{
                position: relative;
                position: relative;
                width: 35px;
                height: 35px;
                font-size: 0.8em;
                margin-bottom: 8px;
                margin-right: 8px;
                border-radius: 50%;
                line-height: 35px;
                text-align: center;
                display: inline-block;
            }
            .checkbox {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                z-index: 999;
                left: 0;
                width: 30px;
                height: 30px;
            }
            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                width: 35px;
                height: 35px;
                font-size: .8em;
                border-radius: 50%;
                line-height: 35px;
                text-align: center;
                color: #1b1a20;
                background-color: #ececec;
                border: 1px solid transparent;
            }
            input:checked~.checkmark {
                background-color: #1b1a20;
                color: #ececec;
            }
            input:checked ~ .checkmark:after {
                display: block;
              }
            `}</style>
        </div>
    )
}

export default Checkbox
