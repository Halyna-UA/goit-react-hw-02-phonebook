import React from 'react';
import PropTypes from 'prop-types';
import {Input } from './Filter.styled'
// фільтрація введених value 
const Filter = ({value, onChange}) => {
    return(
        <div>
            <Input
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