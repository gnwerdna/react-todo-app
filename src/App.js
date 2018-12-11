import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItems';
   
class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems: [
        {title: "take a shower", isComplete: true},
        {title: "have a breakfast", isComplete: true},
        {title: "go work", isComplete: false}
      ]
    }; 

    this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked(item) {
    return(event) => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      });
    }
  }

  render() {
    const {todoItems} = this.state;
    if(todoItems.length) {
      return(
        <div className="App">
          { todoItems.length && todoItems.map((item, index) => (
            <TodoItem 
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}/>
          ))}
        </div>
      );
    } else {
      return (
        <div className="App">
          Nothing here.
        </div>
      );
    }
  }
}

export default App;
