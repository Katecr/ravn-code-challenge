import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { getAllPeople, getSpecificPeople } from '../functions/requests';

const Home = () => {
  const [peoples, setPeoples] = useState(null);
  const [detailPeople, setDetailPeople] = useState(null);

  useEffect(() => {
    getAllPeople(setPeoples);
  }, [])

  return (
    <>
    <header className="header_dark">
      <h1>Ravn Star Wars Registry</h1>
    </header>
  <div className="accordion" id="accordionPeople">
    <div className="card">
      <div className="card-header" id="headingOne">
      <div className="title_card">
        <h4>Luke Skywalker</h4>        
        <p>Human from Tatooine</p>
      </div>        
          <button className="btn text-left" type="button" data-toggle="collapse" data-target="#collapseInfo" aria-expanded="true" aria-controls="collapseInfo">
            
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
      </div>
      
      <div id="collapseInfo" className="collapse" aria-labelledby="headingOne" data-parent="#accordionPeople">
      <h3>General Information</h3>
        <div className="card-body">
          <div>
            <h5>Eye Color</h5>
            <p>Blue</p>
          </div>
          <div>
            <h5>Hair Color</h5>
            <p>Blond</p>
          </div>
          <div>
            <h5>Skin Color</h5>
            <p>Fair</p>
          </div>
          <div>
            <h5>Birth Year</h5>
            <p>19BBY</p>
          </div>
        </div>
      </div>
      
      <div id="collapseInfo" className="collapse" aria-labelledby="headingOne" data-parent="#accordionPeople">
      <h3>Vehicles</h3>
        <div className="card-body">
          <div>
            <h5>Snowspeeder</h5>
          </div>
          <div>
            <h5>Imperial Speeder Bike</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    </div>      
    </>
  );
}

export default Home;
