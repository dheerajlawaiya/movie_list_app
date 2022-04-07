import React from 'react';
import Card from './component/NetflixCard';
import "./App.css";
import mdata from './component/NetflixData';


function App() {
  return (
    <div className="App">
      <h1 className='netflixHeading'>Top 5 Netflix Webseries 2020</h1>
      {mdata.map((val) => {
        return(
          <Card 
          imgsrc = {val.mimgsrc}
          title = {val.mheading}
          name = {val.mname}
          link = {val.mlink}
          />
        );
      })}
      
    </div>
  );
}

export default App;