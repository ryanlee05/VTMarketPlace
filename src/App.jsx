import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar'
import Home from './components/Homepage/Home'
import Footer from './components/Shared/Footer'
import InfoFilter from './components/Homepage/InfoFilter'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = 
          {
            <>
              <Home/>
            </>
          }/>
           <Route path="/create" element={<div>Create Page</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App;
