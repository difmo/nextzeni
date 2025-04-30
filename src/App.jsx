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
import BlogPage from "./admin/AddBlogs/BlogPage.jsx";
import FreeResourcesPage from "./components/resources/FreeResourcesPage.jsx";

function App() {
  return (
    <>
    <Providers>
    <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/blog/:blogId" element={<BlogPage/>} />
        
          <Route path="/auth/*" element={<AuthRoutes />} />

          <Route path="/blogs/*" element={<BlogRoutes />} />
          <Route path="/admin/*" element={<CreateBlogRoutes/>}/>
          <Route path="/free-resources" element={<FreeResourcesPage/>} />

        </Routes>
        <Footer />
        <Floating />
      </Router>
    </Providers>
 
    </>
  );
}

export default App;
