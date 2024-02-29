
import './App.css';
import React, { useState } from 'react';
import GifSwitcher from './Components/GifSwitcher';
import Main from './Components/Main';



function App() {

  const [loading,setLoading] = useState(false);

  return (
    <body>
      {loading ? <GifSwitcher /> : <Main setLoading={setLoading}/>}
    </body>
  );
}

export default App;
