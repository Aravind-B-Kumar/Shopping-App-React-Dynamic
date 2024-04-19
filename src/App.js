import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import Search from './components/Search';

function App() {
  return (
    <div>     

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ViewAll/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

