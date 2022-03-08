import axios from 'axios';


const getAllPeople = async (state) =>{
  const request = await axios.get('https://swapi.dev/api/people/');
  state(request.data.results);
}

export {getAllPeople}