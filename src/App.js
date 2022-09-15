import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import NavBar from './component/NavBar';
import Home from './component/Home';
import Buttonui from './component/Button';
import Footer from './component/Footer';

function App() {
  return (
    <div clssName=""> 
    <Router>
<NavBar/>
  <Routes> 
   <Route exact path="/" element ={<Home/>} />
   <Route exact path="/ui" element={<Buttonui/>}/>
    </Routes>
   <Footer/>
  </Router> 
 </div>
  );
}

export default App;
