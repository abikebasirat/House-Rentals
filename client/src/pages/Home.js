import BottomNav from '../components/BottomNav';
import NavBar from '../components/NavBar';
import Login from '../components/user/Login';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Login />
      <NavBar />
      <BottomNav />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
