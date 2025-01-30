import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//HomePage
import HomePage from './components/view/HomePage';

//Headers
import Header from './components/view/Headers/Header';
import NotRegHeader from './components/view/Headers/NotRegHeader';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route element={<Header />} />
          <Route element={<NotRegHeader />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
