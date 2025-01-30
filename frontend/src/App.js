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


        </Routes>
      </Router>

    </div>
  );
}

export default App;
