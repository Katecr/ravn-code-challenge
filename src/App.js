// Importing routes with react
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Importing components
import Characters from './components/Characters';
import Home from './components/Home';


function App() {
  return (
    <div className="container-fluid">
    <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home></Home>} >

          </Route>
          <Route path="/people/:id" exact={true} element={<Characters></Characters>}>

          </Route>  
      </Routes>  
    </BrowserRouter>                  
    </div>
  );
}

export default App;
