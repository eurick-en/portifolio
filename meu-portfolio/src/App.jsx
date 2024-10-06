import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
import myImage from './assets/images/myImage.jpeg';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-blue-800 fixed w-full z-10">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-white text-2xl">Meu Portfólio</h1>
            <ul className="flex space-x-4">
              <li><Link className="text-white hover:text-gray-400" to="/">Home</Link></li>
              <li><Link className="text-white hover:text-gray-400" to="/projects">Projetos</Link></li>
              <li><Link className="text-white hover:text-gray-400" to="/contact">Contato</Link></li>
            </ul>
          </nav>
        </header>

        {/* Rotas */}
        <main className="flex-grow container mx-auto p-4 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </main>

        {/* Rodapé */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
