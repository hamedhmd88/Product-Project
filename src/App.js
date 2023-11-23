import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Basket from './Pages/Basket';
import { StoreProvider } from './Components/context-and-reducer/StoreContext';


function App() {
  return (
    <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </BrowserRouter>
    </StoreProvider>
    
  );
}

export default App;
