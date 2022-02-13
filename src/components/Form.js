import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';


class Form extends Component {
    generationId = nanoid()
  state = {
    name: "",
    number: ""
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

Form.propTypes = {
    generationId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Form;
