import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./pages/OtherScreens/home/Home.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "./components/ScrollToTop";
import Floating from "./Float.jsx";
import BlogRoutes from "./admin/BlogRoutes/BlogRoutes.jsx";
import CreateBlogRoutes from "./admin/BlogRoutes/CreateBlogRoutes.jsx";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import Providers from "./context/Providers.jsx";
import BlogPage from "./admin/AddBlogs/BlogPage.jsx";
import FreeResourcesPage from "./components/resources/FreeResourcesPage.jsx";
import ShowBlogs from "./admin/AddBlogs/ShowBlogs.jsx";
import AboutNew from "./components/about/NewAbout.jsx";
import HAbout from "./pages/OtherScreens/home/HAbout.jsx";

function App() {
  return (
    <>
    <Providers>
    <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<BlogPage/>} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/blogs/*" element={<BlogRoutes />} />
          <Route path="/admin/*" element={<CreateBlogRoutes/>}/>
          <Route path="/free-resources" element={<FreeResourcesPage/>} />

          {/* Home screens  */}
        
          <Route path="/all-blogs" element={<ShowBlogs/>}/>
          <Route path="/about" element={<AboutNew />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/courses" element={<HAbout/>}/>


        </Routes>
        <Footer />
        <Floating />
      </Router>
    </Providers>
 
    </>
  );
}

export default App;
