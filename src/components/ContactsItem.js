import React from 'react';
import Contacts from './Contacts'
import PropTypes from 'prop-types';


//видалення елемента списку контактів
const ContactsItem = ({contacts, onDelete}) => {
    return (
    <ul>
        {contacts.map(({ id, name, number}) => { 
            return(
            <li key={id}>
                <Contacts name={name} number={number}/>
                <button onClick={() => onDelete(id)}>Delete</button>
            </li>
        )})}
    </ul>)
}

ContactsItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
export default ContactsItem;