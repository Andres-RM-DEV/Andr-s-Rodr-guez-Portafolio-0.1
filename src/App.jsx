import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Nav } from './componente/Nav'
import { Footer } from './componente/Footer'
import { Inicio } from './paginas/Inicio'


function App() {

  return (
    <div>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/habilidades' element={<habilidades/>}/>
        </Routes>      
      </BrowserRouter>
      <Footer/>


    </div>
  )
}

export default App
