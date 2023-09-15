import React from 'react';
class index extends React.Component {

    
    constructor() {
      super();
      this.state = {
        firstname: "",
          lastname: "",
          object :"",
          message: "",
      };
const state2 = this.state;
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
      console.log("changed");
    }
  
    handleSubmit() {
      console.log({state2});
    }
  
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
  
          <div className="container">
            <label htmlFor="firstname"><b>FirstName</b></label>
            <input 
              type="text" 
              value={this.state.firstname}
              placeholder="Enter FirstName" 
              name="firstname" 
              onChange={this.handleChange} 
              required>
            </input>
  
            <label htmlFor="lastname"><b>LastName</b></label>
            <input 
              type="lastname" 
              value={this.state.lastname}
              placeholder="Enter LastName" 
              name="lastname"
              onChange={this.handleChange}  
              required>
            </input>
            <label htmlFor="message"><b>Message</b></label>
            <input 
              type="message" 
              value={this.state.message}
              placeholder="Enter Message" 
              name="message"
              onChange={this.handleChange}  
              required>
            </input>
            <label htmlFor="object"><b>Object</b></label>
            <input 
              type="object" 
              value={this.state.object}
              placeholder="Enter Object" 
              name="object"
              onChange={this.handleChange}  
              required>
            </input>
  
            <button>Login</button>
  
          </div>
  
        </form>
      );
    }
  }
  
  export default index;