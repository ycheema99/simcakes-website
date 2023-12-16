import { useState } from 'react'
import CustomNavbar from './CustomNavbar'
import Wallpaper from './Wallpaper';
import CakeCarousel from './CakeCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomNavbar />
      <Wallpaper />
      <CakeCarousel />
    </>
  )
}

export default App
