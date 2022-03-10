import React, {useEffect, useState} from 'react';

import { getAllVehicles } from '../functions/requests';

function InfoPeople(props) {  
  
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    getAllVehicles(setVehicles);
  }, [])

  return (
    <div className="col-md-9 col-xs-12 col-sm-6 no_padding content_people_pc"  key={props.idPeople}>
          {props.detailPeople != null ? (
              <div className="collapse_item content_general_info">
                <h3>General Information</h3>
                <div className="card-body">
                  <div className="item_info_card">
                    <h5>Eye Color</h5>
                    <p>{props.detailPeople.eye_color}</p>
                  </div>
                  <div className="item_info_card">
                    <h5>Hair Color</h5>
                    <p>{props.detailPeople.hair_color}</p>
                  </div>
                  <div className="item_info_card">
                    <h5>Skin Color</h5>
                    <p>{props.detailPeople.skin_color}</p>
                  </div>
                  <div className="item_info_card">
                    <h5>Birth Year</h5>
                    <p>{props.detailPeople.birth_year}</p>
                  </div>
                </div>
                {props.detailPeople.vehicles != null ? (
                  <div className="collapse_item" >
                  <h3>Vehicles</h3>
                  <div className="card-body">
                    {props.detailPeople.vehicles.map((vehicle, index) => (
                      <div className="item_info_card" key={index}>
                        {
                          vehicles != null ? (
                            vehicles.filter(item => item.url == vehicle)
                            .map((item,i) => (
                              <h5 key={i}>{item.name}</h5>
                            ))
                          ) : ('loading...')                          
                        }
                      </div>
                    ))}
                  </div>
                </div>
                ) : (<h5 className="text-alert">No vehicles</h5>)}                
              </div>
              
          ) : (<h5 className="text-alert">No character selected</h5>)}    
      </div>
  )
}

export default InfoPeople