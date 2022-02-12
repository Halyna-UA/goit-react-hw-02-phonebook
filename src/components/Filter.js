import React from 'react';
import PropTypes from 'prop-types';

// фільтрація введених value 
const Filter = ({value, onChange}) => {
    return(
        <div>
            <input
                type="text"
                name="filter"
                onChange={onChange} 
                value={value}
                />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
  };
export default Filter;