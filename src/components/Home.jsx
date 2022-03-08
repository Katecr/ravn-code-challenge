import React, { useEffect, useState } from 'react';

import { getAllPeople } from '../functions/requests';
import Characters from './Characters';

const Home = () => {
  const [peoples, setPeoples] = useState(null);

  useEffect(() => {
    getAllPeople(setPeoples);
  }, [])

  return (
    <>
    <header className="header_dark">
      <h1>Ravn Star Wars Registry</h1>
    </header>
    <aside>
      <ul>
          {peoples != null ? (
            peoples.map((people, index) => (
              <li key={people.id}>
                <a href={`/people/${index+1}`}>{people.name}</a>
              </li>
            ))
          ) : ('There are no people')}
      </ul>
    </aside>
    <div>
      <Characters /> 
    </div>      
    </>
  );
}

export default Home;
