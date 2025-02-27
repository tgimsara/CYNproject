// import {NavLink,Link,useNavigate} from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AboutUs from './components/view/HomePage';
import ContactUs from './components/view/HomePage';

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
import Programs from './components/view/Project/Programs';
import ViewProjects from './components/view/Project/ViewProjects';

//gallery
import Gallery from './components/view/Gallery/Gallery';
import ViewGallery1 from './components/view/Gallery/ViewGallery1';
import ViewGallery2 from './components/view/Gallery/ViewGallery2';
import ViewGallery3 from './components/view/Gallery/ViewGallery3';
import ViewEye from './components/view/Gallery/ViewEye';

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
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          
          <Route element={<Header />} />
          <Route element={<NotRegHeader />} />
          <Route element={<Footer />} />

          <Route path='/signin' element={<HomePage />} />
          <Route path='/signup' element={<HomePage />} />

          <Route path='/program' element={<Programs />} />
          <Route path='/viewproject' element={<ViewProjects />} />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/viewgallery1' element={<ViewGallery1 />} />
          <Route path='/viewgallery2' element={<ViewGallery2 />} />
          <Route path='/viewgallery3' element={<ViewGallery3 />} />
          <Route path='/vieweye' element={<ViewEye />} />

          <Route path='/partner' element={<PartnerCategory />} />
          <Route path='/local' element={<Local />} />
          <Route path='/international' element={<International />} />
          

        </Routes>
      </Router>

    </div>
  );
}

export default App;
