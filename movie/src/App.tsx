import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './Components/navbar'
import { Auth } from './pages/auth';
import { Home } from './pages/home';
function App() {
  

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<h1>Rated Page</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
