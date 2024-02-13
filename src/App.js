import {Routes , Route ,useLocation} from 'react-router-dom'
import './App.scss';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navbar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utlis.js/particles';
function App() {
  const location = useLocation();
  console.log(location);
  const handleInit = async (main) =>{
    await loadFull(main)
  }

  const renderParticalJsHomePage = location.pathname === '/'
  return (
    <div className="App">
      {/* particles js */}
      {
        renderParticalJsHomePage && (<Particles id="particles" options={particles} init={handleInit}/> )
      }
       
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main page content */}
      <div className="App__main-page-content">
      <Routes>

        <Route index  path='/' element={<Home/>} ></Route>
        <Route index  path='/about' element={<About/>} ></Route>
        <Route index  path='/resume' element={<Resume/>} ></Route>
        <Route index  path='/skills' element={<Skills/>} ></Route>
        <Route index  path='/portfolio' element={<Portfolio/>} ></Route>
        <Route index  path='/contact' element={<Contact/>} ></Route>
              
      </Routes>
      </div>
    </div>
  );
}

export default App;
