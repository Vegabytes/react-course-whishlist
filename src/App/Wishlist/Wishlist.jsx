import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Wishlist = ({wishes}) => (
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <li
          key={text}
          className={classNames('wish-list__item', {
            'wish-list__item--done': done,
          })}
        >
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>{text}</label>
        </li>
      ))}
    </ul>
);


Wishlist.propTypes = {
  wishes : PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool,
    text: PropTypes.text
  }))
};

Wishlist.defaultProps = {
  wishes: []
}

export default Wishlist;