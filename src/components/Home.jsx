import React, { useEffect, useState } from 'react';

import { getAllPeople} from '../functions/requests';

import People from './People';

const Home = () => {
  const [peoples, setPeoples] = useState(null);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    getAllPeople(setPeoples); 
    setTimeout(() => {
      setLoading(false);
    }, 5000); 
  }, [])


  return (
    <>
    <header className="header_dark">
      <h1>Ravn Star Wars Registry</h1>
    </header>
    
    <div className="row">        
        <People  peoples = {peoples} loading={loading}/>  
    </div> 
    
           
    </>
  );
  
}

export default Home;
