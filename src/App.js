import './App.css';

import Header from './components/header/header';
import CoffeeHouse from './components/content-components/coffee-house/coffee-house';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="font-merienda">
      <Header/>
      <CoffeeHouse/>
      <Footer/>
    </div>
  );
}

export default App;
