import React from 'react';
import "./TodoItem.css";
import classNames from "classnames";
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
class TodoItem extends React.Component {
    render() {
        const { item } = this.props;//destructuring
        let url = checkImg;
        if(item.isComplete) {
            url = checkCompleteImg;
        }
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete 
            })}>
                <img onClick={this.props.onClick} src={url}/>
                 <p>{this.props.item.title}</p>
            </div>
        ); 
    }
}
export default TodoItem;