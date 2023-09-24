import "./App.css";
import Footer from "./pages/Home/Components/Footer";
import Header from "./pages/Home/Components/Header";
import Home from "./pages/Home/Home.jsx";
import "./pages/Home/assets/vendor/aos/aos.css";
import "./pages/Home/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./pages/Home/assets/vendor/bootstrap/css/bootstrap.min.css";
import "./pages/Home/assets/vendor/glightbox/css/glightbox.min.css";
import "./pages/Home/assets/vendor/remixicon/remixicon.css";
import "./pages/Home/assets/vendor/swiper/swiper-bundle.min.css";

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
