import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserBootcamp from "./pages/UserBootcamp";
import NotFound from "./pages/NotFound";
import DownloadCertificate from "./pages/DownloadCertificate";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<UserBootcamp />} />
          <Route path="/download" element={<DownloadCertificate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
