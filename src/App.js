import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const particlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 300
			}
		}
	}
}

function App() {
  return (
    <div className="App">
	    <Particles  className='particles'
	      params={particlesOptions}
	    />
      <Navigation />
      <Rank />
      <ImageLinkForm />
      {/*  <FaceRecognition /> */}
      <Logo />
    </div>
  );
}

export default App;
