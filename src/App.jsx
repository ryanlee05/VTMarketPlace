import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar'
import Home from './components/Homepage/Home'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
