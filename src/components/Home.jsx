import React, { useEffect, useState } from 'react';
import { getAllPeople } from '../functions/requests'

const Home = () => {
  const [peoples, setPeoples] = useState(null);

  useEffect(() => {
    getAllPeople(setPeoples);
  }, [])

  return (
    <>
      {peoples != null ? (
        peoples.map(people => (
          <div key={people.id}>
            <a href="{people.id}">{people.name}</a>
          </div>
        ))
      ) : ('There are no people')}
    </>
  );
}

export default Home;
