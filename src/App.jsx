import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
            <div className="content-wrapper">
              <Nav />
              <div className="content">
                <Checkout />
              </div>
              <Footer />
            </div>
          } />
          <Route path="/login" element={
            <div className="content-wrapper">
              <Nav />
              <div className="content">
                <Login />
              </div>
              <Footer />
            </div>
          } />
          <Route path="/" element={
            <div className="content-wrapper">
              <Nav />
              <div className="content">
                <Home />
              </div>
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
