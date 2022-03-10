import axios from 'axios';


export const getAllPeople = async (state) =>{
  const request = await axios.get('https://swapi.dev/api/people/');
  state(request.data.results);
}

export const getSpecificPeople = async (id, state) =>{
  const request = await axios.get(`https://swapi.dev/api/people/${id}`);
  state(request.data);
}

export const getSpecie = async (state) =>{
  const request = await axios.get(`https://swapi.dev/api/species/`);
  state(request.data.results);
}

export const getAllVehicles = async (state) =>{  

  const request = await axios.get('https://swapi.dev/api/vehicles/?page=1'); 

   const request2 = await axios.get('https://swapi.dev/api/vehicles/?page=2');

   const request3 = await axios.get('https://swapi.dev/api/vehicles/?page=3');

   const request4 = await axios.get('https://swapi.dev/api/vehicles/?page=4');

   const resultData = request.data.results;

  const resultData2 = resultData.concat(...request2.data.results)

  const resultData3 = resultData2.concat(...request3.data.results)

  const resultData4 = resultData3.concat(...request4.data.results)

  state(resultData4);
}

