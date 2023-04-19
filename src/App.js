import logo from './logo.svg';
import './App.css';
import { ReactLogo } from './ReactLogo/ReactLogo';
import {BenefitsOfReacts} from './components/ReactBenefits/RaectBenefits'
import {Button} from './components/button/button.js'

function App() {
  return (
    <div className="App">
     <ReactLogo/>
     <BenefitsOfReacts/>
     <Button/>

    </div>
    
  );
}

export default App;
