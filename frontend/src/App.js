// import {NavLink,Link,useNavigate} from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//HomePage
import HomePage from './components/view/HomePage';

//Headers
import Header from './components/view/Headers/Header';
import NotRegHeader from './components/view/Headers/NotRegHeader';

//Footer
import Footer from './components/view/Footer';

//sign
import SignUp from './components/view/Sign/SignUp';
import SignIn from './components/view/Sign/SignIn';

//projects
import OurProjects from './components/view/Project/OurProjects';
import ViewProjects from './components/view/Project/ViewProjects';

//gallery
import Gallery from './components/view/Gallery/Gallery';
import ViewGallery from './components/view/Gallery/ViewGallery';

//partners
import PartnerCategory from './components/view/Partners/ParnerCategory';
import Local from './components/view/Partners/Local';
import International from './components/view/Partners/International';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>

         

          <Route path='/' element={<HomePage />} />
          <Route element={<Header />} />
          <Route element={<NotRegHeader />} />
          <Route element={<Footer />} />

          <Route path='/signin' element={<HomePage />} />
          <Route path='/signup' element={<HomePage />} />

          <Route path='/ourproject' element={<OurProjects />} />
          <Route path='/viewproject' element={<ViewProjects />} />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/viewgallery' element={<ViewGallery />} />

          <Route path='/partner' element={<PartnerCategory />} />
          <Route path='/local' element={<Local />} />
          <Route path='/international' element={<International />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
