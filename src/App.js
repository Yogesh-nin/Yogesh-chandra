import Button from 'react-bootstrap/Button'
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Work from './Pages/Work';
import PageNotFound from './Pages/PageNotFound'

function App() {

  


  return (
    <Router>
      {/* <div className="d-flex"> */}
        <Sidebar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/work" element={<Work />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;

