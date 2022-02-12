import React, { Component } from 'react';
import { nanoid } from 'nanoid'
// import Form from "./components/Form";
import Filter from './components/Filter';


// import PropTypes from 'prop-types';


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
        
        alert(`${newContact.name} is already in contacts`));
    } else {
      findOldContact !== newContact {
        newContact.id = nanoid();

        this.setState((prevState) => ({
          contacts: [...prevState, ...newContact]
        }));
      }
    }
  };

changeFilter = (e) => {
  this.setState({filter: e.currentTarget.value});
};

//   введення даних
handleInputCgange = e =>{
    const {name, value} = e.currentTarget
    this.setState({[name]: value});
}
// підтвердження форми
handleSubmit = e => {
    e.preventDefault()
    this.reset()
    this.setState({name: "", number: ""})
    this.props.onSubmit({...this.state})
}
// очищення полів вводу
reset = () => {
  this.setState({ name: "", number:"" });
}

render(){

 const {name, number} = this.state;
 const {contacts, filter} = this.state;
    return( 
    <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                name
                    <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleInputCgange} value={name}
                />
            </label>

            <label>
                number
                    <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleInputCgange} value={number}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
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
