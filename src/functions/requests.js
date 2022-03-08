import axios from 'axios';


const getAllPeople = async (state) =>{
  const request = await axios.get('https://swapi.dev/api/people/');
  state(request.data.results);
}

const getSpecificPeople = async (id, state) =>{
  const request = await axios.get(`https://swapi.dev/api/people/${id}`);
  state(request.data);
}

export {
  getAllPeople,
  getSpecificPeople
}