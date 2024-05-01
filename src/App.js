import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Introduction from "./Introduction";
import About from './About';
import Project from './Project';
import HashLoader from "react-spinners/HashLoader";
import "./App.css"

const App = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="loader">
        {
          loading ?

          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <HashLoader
              color={"#FFFFFF"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
            :
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
        }
      </div>
    </>
  );
}

export default App;
