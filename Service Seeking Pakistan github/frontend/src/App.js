//Importing App.css
import './App.css';

// Importing Home's Component
import HomeC from './Home/Components/HomeC';

//Importing BrowserRouter,Routes and Route
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//Importing Login
import Login from './Login/Pages/Login';

import ServiceSeekerC from './Login/ServiceSeeker/Components/ServiceSeekerC';

//App Function
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeC />}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Routes>
        <Route path="/serviceSeeker" element={<ServiceSeekerC />}/>
      </Routes>
    </Router>
  );
}

export default App;
