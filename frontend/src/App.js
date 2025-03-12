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
import ViewProjects1 from './components/view/Project/ViewProjects1';
import ViewProjects2 from './components/view/Project/ViewProjects2';
import ViewProjects3 from './components/view/Project/ViewProjects3';
import ViewProjects4 from './components/view/Project/ViewProjects4';
import ViewProjects5 from './components/view/Project/ViewProjects5';
import ViewProjects6 from './components/view/Project/ViewProjects6';
import ViewProjects7 from './components/view/Project/ViewProjects7';

//gallery
import Gallery from './components/view/Gallery/Gallery';
import ViewGallery1 from './components/view/Gallery/ViewGallery1';
import ViewGallery2 from './components/view/Gallery/ViewGallery2';
import ViewGallery3 from './components/view/Gallery/ViewGallery3';
import ViewEye from './components/view/Gallery/ViewEye';
import ViewSound from './components/view/Gallery/ViewSound';
import ViewClub from './components/view/Gallery/ViewClub';
import View25Blood from './components/view/Gallery/View25Blood';
import View26Blood from './components/view/Gallery/View26Blood';
import ViewHrm from './components/view/Gallery/ViewHrm'; 
import CDayCelebrate from './components/view/Gallery/CDayCelebrate';
import Webinar from './components/view/Gallery/Webinar';
import GlobalTeen from './components/view/Gallery/GlobalTeen';
import Galadari from './components/view/Gallery/Galadari';

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
          <Route path='/viewproject1' element={<ViewProjects1 />} />
          <Route path='/viewproject2' element={<ViewProjects2 />} />
          <Route path='/viewproject3' element={<ViewProjects3 />} />
          <Route path='/viewproject4' element={<ViewProjects4 />} />
          <Route path='/viewproject5' element={<ViewProjects5 />} />
          <Route path='/viewproject6' element={<ViewProjects6 />} />
          <Route path='/viewproject7' element={<ViewProjects7 />} />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/viewhrm' element={<ViewHrm />} />
          <Route path='/viewgallery1' element={<ViewGallery1 />} />
          <Route path='/viewgallery2' element={<ViewGallery2 />} />
          <Route path='/viewgallery3' element={<ViewGallery3 />} />
          <Route path='/vieweye' element={<ViewEye />} />
          <Route path='/viewsound' element={<ViewSound />} />
          <Route path='/viewclub' element={<ViewClub />} />
          <Route path='/viewblood25' element={<View25Blood />} />
          <Route path='/viewblood26' element={<View26Blood />} />
          <Route path='/cdaycelebrate' element={<CDayCelebrate />} />
          <Route path='/webinar' element={<Webinar />} />
          <Route path='/global' element={<GlobalTeen />} />
          <Route path='/galadari' element={<Galadari />} />

          <Route path='/partner' element={<PartnerCategory />} />
          <Route path='/local' element={<Local />} />
          <Route path='/international' element={<International />} />
          

        </Routes>
      </Router>

    </div>
  );
}

export default App;
