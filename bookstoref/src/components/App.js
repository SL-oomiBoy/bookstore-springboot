import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Checkout from './Checkout';
import Addtocart from './Addtocart';
import Bookpreview from './Bookpreview';


const App = () => {
  return (
  
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/Checkout' element={<Checkout/>}></Route>
            <Route path='/Addtocart' element={<Addtocart/>}></Route>
            <Route path='/book/:bookID' element={<Bookpreview/>}></Route>
           </Routes> 
        </BrowserRouter>
      </div>
  );
}

export default App;
