/*App layout, acts as the root component of the app's UI*/
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import About from './pages/About';
import ReturnExchange from './pages/ReturnExchange';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Layout />}>
          <Route index element = {<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About />} />
          <Route path='return-exchange' element={<ReturnExchange />} />
          <Route path='shipping-policy' element={<ShippingPolicy />}/>　　
          <Route path='privacy-policy' element={<PrivacyPolicy />}/>　　       
           {/*<Route path="*" element={<NoPage />} /> a catch-all for any undefined URLs. This is great for a 404 error page.*/}


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
