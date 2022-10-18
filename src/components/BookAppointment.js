import React,{Component} from 'react'

class BookAppointment extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      password:"",
      email:"",
      time:"",
    };
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

render (){
  return(
  <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="number"
              placeholder="time"
              value={this.state.time}
              onChange={this.handleTime}
            />
          </div>
          <button>BookAppointment</button>
        </form>
      </div>
    );
}
};

export default BookAppointment;