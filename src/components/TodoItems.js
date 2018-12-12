import React from 'react';
import "./TodoItem.css";
import classNames from "classnames";
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

import PropTypes from 'prop-types';
class TodoItem extends React.Component {
    render() {
        const { item, onClick } = this.props;//destructuring
        let url = checkImg;
        if(item.isComplete) {
            url = checkCompleteImg;
        }
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete 
            })}>
                <img onClick={onClick} src={url}/>
                 <p>{item.title}</p>
            </div>
        ); 
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func.isRequired
};
export default TodoItem;