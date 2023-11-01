
import './App.css';
import Snapshot from './components/Snapshot';
import Main from './components/Main';
import Header from './components/Header';
import Sponsor from './components/Sponsor';
import About from './components/About';
import Event from './components/Event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import backgroundImage from './Screenshot.png';
function App() {
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    
  };
  return (
    <Router>
    <div className="website" style={bgStyle}>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sponsor" element={<Sponsor/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/snapshot" element={<Snapshot/>} />
        
      </Routes>
      <Footer/>
    </div>

    </Router>
  );
}

export default App;

