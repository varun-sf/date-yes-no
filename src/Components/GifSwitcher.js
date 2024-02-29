import React, { useState, useEffect } from 'react';
import baby from './bb-baby.gif';
import leo from './dance-party.gif';
import indian from './indian-dance-dancing.gif'

// Define your component
const GifSwitcher = () => {
  // State to keep track of the current GIF source
  const [currentGif, setCurrentGif] = useState(0);

  const gifs = [
    baby,
    leo,
    indian
  ];

  // Set the duration for the first GIF in milliseconds (e.g., 5000ms for 5 seconds)
  const firstGifDuration = 4000;


  // Effect to switch to the second GIF after the specified duration
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentGif((currentGif+1)% gifs.length);

    }, firstGifDuration);

    // Clear the timeout to prevent it from running after the component unmounts
    return () => clearTimeout(timeoutId);
  }, [currentGif, gifs.length]); // Empty dependency array means this effect runs once after the initial render

  // Render the component with the current GIF source
  return (
    <img src={gifs[currentGif]} alt="Current GIF" />
  );
};

// Export the component
export default GifSwitcher;