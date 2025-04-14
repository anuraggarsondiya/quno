import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* More routes coming later */}
    </Routes>
  );
}

export default App;
