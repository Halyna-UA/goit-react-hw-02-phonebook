import React, { Component } from 'react';
import Form from "./components/Form";


class App extends Component {
  state = {
    // contacts: [],
    name: "",
    number: ""
  };
  render(){
    
    return(
      <div>
        <h1>Phonebook</h1>
  <Form onSubmit/>
  <h2>Contacts</h2>
  </div>
  )
}
  
}



export default App;
