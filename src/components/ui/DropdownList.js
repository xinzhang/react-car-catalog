import React from 'react';
import PropTypes from 'prop-types';

const DropDownList = ({dataSource, name, value, text, size, onchange, ...props}) => {
    let optionContent = dataSource.map( (item, idx) => {
        let d = <option key={idx} value={item[value]}>{item[text]}</option>    
        return d    
    });
    return (
        <select className="bs-select form-control" 
            style={{width: size}}
            name={name} 
            onChange={onchange}>
            <option value="-1"> Please select one ... </option>
            { optionContent }
        </select>
    )
}

DropDownList.propTypes = {
    dataSource: PropTypes.array
}

export default DropDownList;
