import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItems';
import TodoFooter from './components/TodoFooter';
import tick from './img/tick.svg';
class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: "",
      currentFilter: 'all',//all active completed
      todoItems: [
        {title: "take a shower", isComplete: true},
        {title: "have a breakfast", isComplete: true},
        {title: "go work", isComplete: 5}
      ]
    }; 
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.onItemClicked = this.onItemClicked.bind(this);
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

  onKeyUp(e) {
    let text = e.target.value;
    if(e.keyCode === 13) { //enter key
      if(!text) {
        return;
      }
      text = text.trim();
      if(!text) {return; }
      this.setState({
        newItem:'',
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems
        ]
      });
    } 
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const {todoItems, newItem} = this.state;
    const itemNotActive = todoItems.filter(item => (
      item.isComplete === false
    ));

    if(todoItems.length) {
      return(
        <div className="App">
          <div className="Header">
            <img 
              src={tick}
              />
            <input 
              type="text" 
              onKeyUp={this.onKeyUp} 
              placeholder="What needs to be done?"
              value={newItem}
              onChange={this.onChange}/>
          </div>
          { todoItems.length && todoItems.map((item, index) => (
            <TodoItem 
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
          <TodoFooter
            itemNotActive={itemNotActive.length}
          />
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
