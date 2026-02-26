import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from './component/CustomNavbar';
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';
import StatsSection from './component/StatsSection';
import ServicesSection from './component/ServicesSection';
import ToolsSection from './component/ToolsSection';
import SupportSection from './component/SupportSection';
import SupportProcess from './component/SupportProcess';
import TestimonialSection from './component/TestimonialSection';
import BlogSection from './component/BlogSection';
import FaqSection from './component/FaqSection';
import Footer from './component/Footer';
import CtaSection from './component/CtaSection';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import CourseDetails from './pages/CourseDetails';
import Contact from "./pages/Contact";
import MernSection from './pages/MernSection';
import SubcourseDetails from './pages/SubcourseDetails';
function App() {
  return (
    <>
      <Router>

        <CustomNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path='/coursedetils/:slug' element={<SubcourseDetails/>}/>
        </Routes>

        <Footer />

      </Router>

    </>
  );
}

export default App;

// import CustomNavbar from "./component/CustomNavbar";
// import Footer from "./component/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>

//       <CustomNavbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />

//     </Router>
//   );
// }

// export default App;