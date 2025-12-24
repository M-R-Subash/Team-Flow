import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import PageLoader from "./components/common/PageLoader";

// Lazy load pages
const Homepage = lazy(() => import("./pages/Homepage"));
const Blogpage = lazy(() => import("./pages/Blogpage"));
const Featurespage = lazy(() => import("./pages/Featurespage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Navbar />git 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<Featurespage />} />
          <Route path="/blog" element={<Blogpage />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
