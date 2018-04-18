import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    console.log("TESTEE");
    
    try {
      const res = await fetch('http://127.0.0.1:8000/api/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const todos = await res.json();
      this.setState({
        todos
      });
      console.log("todos", this.state);
      
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {
          this.state.todos.map(item => (
          <div>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))
        }
      </div>
    );
    // return (
    //   <div>
    //     <h1>TESTE</h1>
    //   </div>
    // );
  }
}

export default App;
