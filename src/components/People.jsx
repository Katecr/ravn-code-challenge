import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { getSpecificPeople } from '../functions/requests';
import Loading from './Loading';

export default function People(props) {
   const [detailPeople, setDetailPeople] = useState(null);
   const [species, setSpecies] = useState(null);
  const [idPeople, setIdPeople] = useState(1);

  return (
    <>
      <aside className="col-md-3 col-xs-12 col-sm-6 no_padding">      
          {props.peoples != null ? (
            props.peoples.map((people, index) => (   
              <div className="accordion" id="accordionPeople" key={index}>           
                <div className="card">
                  <div className="card-header" id="headingOne" onClick={() =>{getSpecificPeople(index+1,setDetailPeople)}}>
                    <div className="title_card">
                      <h4>{people.name}</h4>        
                      <p> from Tatooine</p>
                    </div>        
                      <button className="btn text-left" type="button" data-toggle="collapse" data-target={'#'+'p'+people.height} aria-expanded="true" aria-controls="collapse_people">                        
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                  </div>                
                  <div id={'p'+people.height} className="collapse collapse_item content_people_movil" aria-labelledby="headingOne" data-parent="#accordionPeople">
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
                  <div id={'p'+people.height} className="collapse collapse_item content_people_movil" aria-labelledby="headingOne" data-parent="#accordionPeople">
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
          ) : ( 
            <div className="content_spinner"> 
              {props.loading && <Loading />}
              <p className="text-alert">There are no people</p>
            </div>         
          )}      
      </aside>
      <div className="col-md-9 col-xs-12 col-sm-6 no_padding content_people_pc">
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
              
          ) : (<h5 className="text-alert">No character selected</h5>)}    
      </div>
    </>
    
  )
}
