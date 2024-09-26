import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import Loading from './components/Loading';
import Notification from './components/Notification';
import Room from './components/rooms/Room';
import { FoodBankRounded } from '@mui/icons-material';
import About from './components/About';

const App = () => {
  return (
    <>
      <Loading />
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Room />
    
    </>
  );
};

export default App;
