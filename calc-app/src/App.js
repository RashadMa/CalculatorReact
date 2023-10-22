import React from 'react';

const App = () => {
  return (
    <div className='calc-container'>
      <div className='calc-output'>
        <div className='calc-previous'></div>
        <div className='calc-current'></div>

      </div>
      <button className='del'>AC</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>X</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='del'>=</button>
    </div>
  );
}

export default App;
