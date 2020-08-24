import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Wishinput = ({onNewWish}) => {

  const [newWishText, setNewWishText] = useState('');
  return (
      <fieldset className="wish-input">
        <legend className="wish-input__label">New wish</legend>
        <input 
          className="wish-input__field" 
          placeholder="Enter your wish here" 
          value={newWishText}
          onChange={e => setNewWishText(e.target.value)}
          onKeyUp={e => {
            if(e.key === 'Enter') {
              onNewWish({done:false,text:newWishText});
              setNewWishText('');
            };
          }}/>
      </fieldset>
  );
}

Wishinput.propTypes = {
  onNewWish: PropTypes.func
};

Wishinput.defaultProps = {
  onNewWish: () => {}
}


export default Wishinput;