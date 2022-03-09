import React, { useEffect, useState } from 'react';

// Import of functions for reading information from the api
import { getAllPeople} from '../functions/requests';

// People component
import People from './People';

const Home = () => {
  const [peoples, setPeoples] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // When reloading the page shows loader and the setPeople status is populated
  useEffect(() => {
    setLoading(true);
    getAllPeople(setPeoples); 
    setTimeout(() => {
      setLoading(false);
    }, 5000); 
  }, [])


  return (
    <>
    {/*Black title header */}
    <header className="header_dark">
      <h1>Ravn Star Wars Registry</h1>
    </header>
    {/*Sidebar where people are listed */}
    <div className="row">        
        <People  peoples = {peoples} loading={loading}/>  
    </div>     
    </>
  );
  
}

export default Home;
