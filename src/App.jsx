import Footer from "./Footer/Footer";
import HomePage from "./Home/HomePage";
import Navbar from "./Navbar/Navbar";
import Speciality from "./Speciality/Speciality";
import OurCustomerSuccessStories from "./SuccessStories/OurCustomerSuccessStories";
import SuccessStories from "./SuccessStories/SuccessStories";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <OurCustomerSuccessStories />
      {/* <SuccessStories /> */}
      <Speciality />
      <Footer />
    </>
  );
}

export default App;
