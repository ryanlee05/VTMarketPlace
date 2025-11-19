import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar'
import Home from './components/Homepage/Home'
import Footer from './components/Shared/Footer'
import CustomizeInfo from './components/Customize/CustomizeInfo'
import Customize from './components/Customize/Customize'
import View from './components/View/View'
import EditItem from './components/Customize/Update'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path="/create" element= {
            <>
              <CustomizeInfo/>
              <Customize/>
            </>            
            } />
          <Route path = "/item/:id/:slug" element = {<View/>}/>
          <Route path = "/customize/:id/:slug" element = {<EditItem/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App;
