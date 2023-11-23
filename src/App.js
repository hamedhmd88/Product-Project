import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Basket from './Pages/Basket';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
