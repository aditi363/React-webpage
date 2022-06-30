import Homepage from "./pages/homepage/Homepage";
import ToolsPage from "./pages/tools/ToolsPage";
import { Routes ,Route } from 'react-router-dom';
import Header from "./components/header/header";
import AboutPage from "./pages/about/AboutPage";
import ContactMe from "./pages/ContactMe/Contact";
import Footer from "./pages/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

