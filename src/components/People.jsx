import React, {useState, useEffect} from 'react'

// Import icons for the list
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import own components and api functions
import { getSpecificPeople, getSpecie, getAllVehicles } from '../functions/requests';
import Loading from './Loading';
import InfoPeople from './InfoPeople';

export default function People(props) {
   const [detailPeople, setDetailPeople] = useState(null);  
   const [species, setSpecies] = useState(null);
   const [idPeople, setIdPeople] = useState(1);
   const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    getSpecificPeople(idPeople,setDetailPeople);
    getSpecie(setSpecies);
    getAllVehicles(setVehicles);
  }, [idPeople])

  return (
    <>
      <aside className="col-md-3 col-xs-12 col-sm-6 no_padding">      
          {props.peoples != null ? (
            props.peoples.map((people, index) => (   
              <div className="accordion" id="accordionPeople" key={index}>           
                <div className="card">
                  <div className="card-header" id="headingOne" onClick={() =>{setIdPeople(index+1)}}>
                    <div className="title_card">
                      <h4>{people.name}</h4>        
                      <p>  
                      {species != null ? (
                        species.filter((specie, i) => i === index).map(specie => (specie.name+" "))
                      ) : (' ')}
                       from Tatooine</p>
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
                  {people.vehicles != '' ? (
                    <div id={'p'+people.height} className="collapse collapse_item content_people_movil" aria-labelledby="headingOne" data-parent="#accordionPeople">
                    <h3>Vehicles</h3>
                    <div className="card-body">
                    {people.vehicles.map((vehicle, index) => (
                      <div className="item_info_card" key={index}>
                        {
                          vehicles != null ? (
                            vehicles.filter( function(e){
                              return e.url === vehicle
                            }).map((ele, i) => (
                              <h5 key={i}>{ele.name}</h5>
                            ))
                            ) : ('')                      
                        }
                      </div>
                    ))}
                    </div>
                  </div>
                  ) : ('')}
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
      <InfoPeople detailPeople = {detailPeople} idPeople={idPeople}/>
    </>
    
  )
}
