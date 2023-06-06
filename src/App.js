import './App.css';
import { Routes, Route } from 'react-router-dom';

import CoffeeHouse from './components/content-components/coffee-house/coffee-house';
import OurCoffee from './components/content-components/our-coffee/our-coffee';
import YourPleasure from './components/content-components/your-pleasure/your-pleasure';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="font-merienda">
      <Routes>
        <Route path='/coffee-house' element={<CoffeeHouse/>}/>
        <Route path='/our-coffee' element={<OurCoffee/>}/>
        <Route path='/your-pleasure' element={<YourPleasure/>}/>
        <Route path='*' element={<CoffeeHouse/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
