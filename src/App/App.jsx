import React, {useState} from 'react';

import './App.css';
import Wishlist from './Wishlist/Wishlist.jsx';
import Wishinput from './Wishinput/Wishinput.jsx';

const initialWishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];
const App = () => {
  const [wishes,setWishes] = useState(initialWishes);
  return (
  <div className="app">
    <h1>My wishlist</h1>
    <Wishinput onNewWish={wish => setWishes([wish,...wishes])}/>
    <Wishlist wishes={wishes}/>
    <button type="button" className="wish-clear">
      Archive done
    </button>
  </div>
);
  }

export default App;
