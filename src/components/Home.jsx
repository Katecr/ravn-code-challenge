import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { getAllPeople, getSpecificPeople, getSpecie } from '../functions/requests';

const Home = () => {
  const [peoples, setPeoples] = useState(null);
  const [species, setSpecies] = useState(null);
  const [idPeople, setIdPeople] = useState(null);
  const [detailPeople, setDetailPeople] = useState(null);

  useEffect(() => {
    getAllPeople(setPeoples);
    getSpecie(2, setSpecies);    
  }, [])

  return (
    <>
    <header className="header_dark">
      <h1>Ravn Star Wars Registry</h1>
    </header>
    <div className="row">
      <aside className="col-md-3 col-xs-12 col-sm-4 no_padding">      
          {peoples != null ? (
            peoples.map((people, index) => (   
              <div className="accordion" id="accordionPeople" key={index}>           
                <div className="card">
                  <div className="card-header" id="headingOne" onClick={() =>{getSpecificPeople(index+1,setDetailPeople)}}>
                    <div className="title_card">
                      <h4>{people.name}</h4>        
                      <p>{species.name} from Tatooine</p>
                    </div>        
                      <button className="btn text-left" type="button" data-toggle="collapse" data-target={'#'+'p'+people.height} aria-expanded="true" aria-controls="collapse_people">                        
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                  </div>                
                  <div id={'p'+people.height} className="collapse collapse_item" aria-labelledby="headingOne" data-parent="#accordionPeople">
                    <h3>General Information</h3>
                    <div className="card-body">
                      <div className="item_info_card">
                        <h5>Eye Color</h5>
                        <p>{people.eye_color}</p>
                      </div>
                      <div className="item_info_card">
                        <h5>Hair Color</h5>
                        <p>{people.hair_color}</p>
                      </div>
                      <div className="item_info_card">
                        <h5>Skin Color</h5>
                        <p>{people.skin_color}</p>
                      </div>
                      <div className="item_info_card">
                        <h5>Birth Year</h5>
                        <p>{people.birth_year}</p>
                      </div>
                    </div>
                  </div>
                  <div id={'p'+people.height} className="collapse collapse_item" aria-labelledby="headingOne" data-parent="#accordionPeople">
                    <h3>Vehicles</h3>
                    <div className="card-body">
                      <div className="item_info_card">
                        <h5>Snowspeeder</h5>
                      </div>
                      <div className="item_info_card">
                        <h5>Imperial Speeder Bike</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : ('There are no people')}      
      </aside>
      <div className="col-md-9 col-xs-12 col-sm-8 no_padding">
          {detailPeople != null ? (
              <div className="collapse_item content_general_info">
                <h3>General Information</h3>
                <div className="card-body">
                  <div className="item_info_card">
                    <h5>Eye Color</h5>
                    <p>{detailPeople.eye_color}</p>
                  </div>
                  <div className="item_info_card">
                    <h5>Hair Color</h5>
                    <p>{detailPeople.hair_color}</p>
                  </div>
                  <div className="item_info_card">
                    <h5>Skin Color</h5>
                    <p>{detailPeople.skin_color}</p>
                  </div>
                  <div className="item_info_card">
                    <h5>Birth Year</h5>
                    <p>{detailPeople.birth_year}</p>
                  </div>
                </div>
                <div className="collapse_item" >
                  <h3>Vehicles</h3>
                  <div className="card-body">
                    <div className="item_info_card">
                      <h5>Snowspeeder</h5>
                    </div>
                    <div className="item_info_card">
                      <h5>Imperial Speeder Bike</h5>
                    </div>
                  </div>
                </div>
              </div>
              
          ) : ('No character selected')}    
      </div>
    </div>
          
    </>
  );
}

export default Home;
