import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({name, number}) => {
    return (
        <div>
            <span>{name}</span>
            <span>{number}</span>
        </div>
    )
};

Contacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default Contacts;