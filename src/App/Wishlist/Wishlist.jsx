import React from 'react';
import Wishitem from './Wishitem.jsx';
import PropTypes from 'prop-types';


const Wishlist = ({wishes, onWishesChange}) => (
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <Wishitem 
          done={done} 
          text={text}
          id={`wish${i}`}
          key= {text}
          onDoneChange= {value => {
            const updatedWishes = [...wishes];
            updatedWishes[i].done = value;
            onWishesChange(updatedWishes);
          }}/>
      
      ))}
    </ul>
);


Wishlist.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(Wishitem.propTypes)),
  onWishesChange: PropTypes.func
};
Wishlist.defaultProps = {
  wishes: [],
  onWishesChange: () => {}
};

export default Wishlist;