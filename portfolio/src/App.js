import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';
import { FaGithub } from 'react-icons/fa';
import RotatingText from './components/RotatingText';
import CV from './components/CV';

function App() {
  // Estado para controlar qual página mostrar
  const [currentPage, setCurrentPage] = useState('home');

  // Função para renderizar a página atual
  const renderPage = () => {
    switch(currentPage) {
      case 'cv':
        return <CV />;
      case 'home':
      default:
        return (
          <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
            <div className="max-w-4xl p-4 flex flex-col items-center">
              <h1 className="text-7xl font-bold text-blue-50">Hi, I am Miguel Duarte</h1>
              <RotatingText />
              <div className="mt-6 flex space-x-4">
                <LinkedinShareButton url={"https://www.linkedin.com/in/miguelscduarte/"} title={"Miguel Duarte - Full Stack Developer"}>
                  <LinkedinIcon size={40} iconFillColor={"#FFFFFF"} round />
                </LinkedinShareButton>
                <a
                  href="https://github.com/miguelsantoscoelhoduarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333333] hover:text-[#24292e] transition-colors"
                >
                  <FaGithub size={40} />
                </a>
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="bg-[#021526] min-h-screen">
      {/* Passar setCurrentPage para a Navbar */}
      <Navbar setCurrentPage={setCurrentPage} />
      {/* Renderizar a página atual */}
      {renderPage()}
    </div>
  );
}

export default App;
