import './App.css';
import {NavBar} from './components/Navbar';
import {Banner}  from './components/Banner';
import {Skills}  from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {About} from './components/about';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <About/>
    </div>
  );
}

export default App;
