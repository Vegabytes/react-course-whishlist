import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Wishitem = ({done, text, id, onDoneChange}) => (
    <li
        className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        })}
    >
        <input 
            id={id} 
            type="checkbox" 
            checked={done}
            onChange={e => onDoneChange(e.target.checked)} />
        <label htmlFor={id}>{text}</label>
  </li>
);

Wishitem.propTypes = {
    done: PropTypes.bool,
    text: PropTypes.text,
    id: PropTypes.string,
    onDoneChange: PropTypes.func
  };
  
  Wishitem.defaultProps = {
    done: false,
    text: '',
    id: '',
    onDoneChange: () => {}
  }


export default Wishitem;


