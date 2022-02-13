import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from "./components/Form";
import Filter from './components/Filter';
 import ContactsItem from './components/ContactsItem';



class App extends Component {

    generationId = nanoid()
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  handleFormSubmit = ({name, number}) => {
    const {contacts} = this.state;
    const newContact = {id: nanoid(), name, number};

      // перевірка вже існуючого контакту
    const findOldContact = contacts.find((contact) => contact.name === newContact);

      // якщо контакт вже існує - алерт проце повідомить, якщо ні - додасть
    if (findOldContact === newContact){
      return(
        
        alert(`${newContact.name} is already in contacts`)
        );
    } else if 
      (findOldContact !== newContact) {
        newContact.id = nanoid();

        this.setState((prevState) => ({
          contacts: [...prevState, ...newContact]
        }));
      
    }
  };

changeFilter = (e) => {
  this.setState({filter: e.currentTarget.value});
};


deleteContactItem = (contactId) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(i => i.id !== contactId)
  }))
}

render(){

  const {filter} = this.state;
    return( 
      <div>
      <h1>Phonebook</h1>
      <Form onSubmit={this.handleFormSubmit}/>
    
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>
      <ContactsItem contacts={this.contacts} onChange={this.deleteContactItem}/>
    </div>
    );
    }
}








// Form.propTypes = {
//     generationId: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };

// class App extends Component {
//   state = {
//     // contacts: [],
//     name: "",
//     number: ""
//   };

//   handleSubmit = e => {
//     e.preventDefault()
//     this.reset()
//     this.setState({name: "", number: ""})
//     this.props.onSubmit({...this.state})
// }

//   render(){
    
//     return(
//       <div>
//         <h1>Phonebook</h1>
//   <Form onSubmit={this.handleSubmit}/>
//   <h2>Contacts</h2>
//   </div>
//   )
// }
  
// }



export default App;
