import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import TaskPlace from './components/TaskPlace';
import BlogSection from './components/BlogSection';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/taskplace" element={<TaskPlace />} />
        <Route path="/blogsection" element={<BlogSection />} />
      </Routes >
    </Router>
  )
}
export default App
