import React from 'react';
import { ReactComponent as ReactLogo } from "./assets/yoga.svg";
import mountainImage from "./assets/mountains.jpg";

export function OnDay() {
    const backgroundImageStyle = {
      backgroundImage: `url("${mountainImage}")`,
      backgroundSize: "cover",
    };

  return (
    <div className='App'>
      <div className=' text-white' style={backgroundImageStyle}>
        <div className='bg-gradient-to-r from-black px-8 py-16'>
          <div className=' max-w-xl grid grid-cols-1 gap-8'>
          
              {/* <ReactLogo className="fill-white" /> */}
            
            {/* <div className="w-12">
              <ReactLogo className="fill-white" />
            </div> */}
            <h2 className='text-xl uppercase font-bold'>
              Join a Beach Yoga session
            </h2>
            <h1 className='text-6xl font-bold'>Clifton 4th</h1>
            <p className='text-lg'>
              Yoga is the art work of awareness on the canvas of body, mind, and
              soul.
              
              Picking up from where you left off. Or starting at the very
              beginning. A safe place to explore your yoga practice, wherever
              you are in your journey. A place to enjoy accessible, authentic
              and inclusive yoga. We have no prerequisites and ask nothing of
              you but to join us and let the yoga show you why...
            </p>
            <button className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-45'>
              Join a Beach Yoga session.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnDay;
