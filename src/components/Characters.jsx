import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificPeople } from '../functions/requests';

const Characters = () => {
  const {id} = useParams();
  const [detailPeople, setDetailPeople] = useState(null);

  useEffect(() => {
    getSpecificPeople(id, setDetailPeople);
  },[])

  return (
    <>
      {detailPeople != null ? (
        <div>
          Personaje con el id  {id}
          <h2>{detailPeople.name}</h2>
        </div>
      ) : ('There are no people')}
    </>
    
  );
}

export default Characters;
