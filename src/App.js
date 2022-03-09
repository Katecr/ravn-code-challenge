// Importing routes with react
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Importing components
import Home from './components/Home';


function App() {
  return (
    <div className="container-fluid no_padding">
    <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home></Home>} >
          </Route> 
      </Routes>  
    </BrowserRouter>                  
    </div>
  );
}

export default App;
