import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "./components/ScrollToTop";
import Floating from "./Float.jsx";
import BlogRoutes from "./admin/BlogRoutes/BlogRoutes.jsx";
import CreateBlogRoutes from "./admin/BlogRoutes/CreateBlogRoutes.jsx";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import Providers from "./context/Providers.jsx";

function App() {
  return (
    <>
    <Providers>
    <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/*" element={<BlogRoutes />} />
          <Route path="/admin/*" element={<CreateBlogRoutes/>}/>
        </Routes>
        <Footer />
        <Floating />
      </Router>
    </Providers>
 
    </>
  );
}

export default App;
