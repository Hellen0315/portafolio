import React from "react";
import ReactPlayer from "react-player";
function App() {
  return (
    <div className="App">
      hola
      <header className="App-header">
        <ReactPlayer 
        url ={require('./')}
        width = '100%'
        height = '100%'
        />
      </header>
    </div>
  );
}

export default App;
