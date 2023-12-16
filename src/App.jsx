import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Wallpaper from './Wallpaper';
import CakeCarousel from './CakeCarousel';
import Gallery from './Gallery';
import Contact from './Contact';
import Pricing from './Pricing';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <Wallpaper />
            <CakeCarousel />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
