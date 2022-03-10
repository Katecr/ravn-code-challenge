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
  const request = await axios.get('https://swapi.dev/api/vehicles/');
  state(request.data.results);
}
