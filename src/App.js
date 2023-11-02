import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cursos from './components/Cursos/cursos';
import Admin from './components/Admin/admin';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>
      
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route index element={<Home/>} />

        <Route path='admin' element={<Admin/>} />
        <Route path='cursos' element={<Cursos/>} />



      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
