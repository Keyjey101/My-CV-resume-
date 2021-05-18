import './App.css';

import CollapseCard from './components/CollapseCard';
import ControlledAccordions from './components/ControlledAccordions';
import { Footer } from './components/Footer';
import Header from './components/Header';





function App() {
  return (
    <div>
    
   <Header/>
  <ControlledAccordions />
   <CollapseCard />
<Footer />
    </div>
  );
}

export default App;
