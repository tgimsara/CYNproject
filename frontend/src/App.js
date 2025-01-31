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

//gallery
import Gallery from './components/view/Gallery/Gallery';
import ViewGallery from './components/view/Gallery/ViewGallery';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>

         

          <Route path='/' element={<HomePage />} />
          <Route element={<Header />} />
          <Route element={<NotRegHeader />} />
          <Route element={<Footer />} />

          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/ourproject' element={<OurProjects />} />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/viewgallery' element={<ViewGallery />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
