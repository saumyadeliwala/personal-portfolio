import React, { useState } from 'react';
import Header from "./Header";
import Introduction from "./Introduction";
import About from './About';
import Project from './Project';

const App = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <>

      <div className="box1">
        <Header toggleMenu={() => setMenuIsActive(!menuIsActive)} />
        <Introduction menuIsActive={menuIsActive} />

      </div>

      <div className='box2'>
        <About menuIsActive={menuIsActive} />
      </div>

      <div className='box2'>
        <Project menuIsActive={menuIsActive} />
      </div>
    </>
  );
}

export default App;
