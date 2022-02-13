import React from 'react';
import Contacts from './Contacts'
import PropTypes from 'prop-types';
import {List, Item } from './ContactsItem.styled'

//видалення елемента списку контактів
const ContactsItem = ({contacts, onDelete}) => {
    return (
    <List>
        {contacts.map(({ id, name, number}) => { 
            return(
            <Item key={id}>
                <Contacts name={name} number={number}/>
                <button onClick={() => onDelete(id)}>Delete</button>
            </Item>
        )})}
    </List>)
}

ContactsItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
export default ContactsItem;