import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <p className="text-center mb-2 sm:mb-0">© 2024 Henrique Sanches. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0 flex-wrap">
          <a href="https://github.com/eurick-en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/henrique-borges-de-castro-sanches-2391b2264/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/eur1ck_/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
