import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItems';
class App extends Component {
  constructor(){
    super();
    this.TodoItem = [
      {title: "have a breakfast", isComplete: true},
      {title: "take a shower", isComplete: true},
      {title: "goto work"}
    ]; 
  }


  render() {
    return (
      <div className="App">
        {this.TodoItem.length > 0 && this.TodoItem.map((item, key) => 
            <TodoItem 
              key={key} 
              item={item}
            />)}
        {this.TodoItem.length === 0 && "Nothing here." }
      </div>
    );
  }
}

export default App;
