import './App.css';
import Soldes from './components/Navbar/Soldes';
import Meilleursventes from './components/Navbar/Meilleursventes'; 
import Bonsplans from './components/Navbar/Bonsplans'; 
import DIY from'./components/Navbar/DIY'; 
import './components/Navbar/Navbar.css'; 
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/soldes'element={<Soldes/>}/>
        <Route path='/bonsplans'element={<Bonsplans/>}/>
        <Route path='/diy'element={<DIY/>}/>
        <Route path='/meilleursventes' element={<Meilleursventes />}/>
    </Routes>
</Router> 
</div>
  );
}

export default App;
