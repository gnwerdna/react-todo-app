import React, { Component } from 'react'
import './TodoFooter.css';
export default class TodoFooter extends Component {
  render() {
    return (
      <div className="TodoFooter">
        <span className="TodoCount">
            <strong>{this.props.itemNotActive}</strong> item left
        </span>
        <ul className="Filter">
            <li><a href="#" className="selected">All</a></li>
            <li><a href="#/active" className="">Active</a></li>
            <li><a href="#/completed" className="">Completed</a></li>
        </ul>
      </div>
    )
  }
}
