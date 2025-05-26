import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';
import { FaGithub } from 'react-icons/fa';
import RotatingText from './components/RotatingText';
import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'cv':
        return <CV />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
            <div className="max-w-4xl p-4 flex flex-col items-center">
              <h1 className="text-7xl font-bold text-blue-50">Hi, I am Miguel Duarte</h1>
              <RotatingText />
              <div className="mt-6 flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/miguelscduarte/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-auto"
                        >
                            <LinkedinIcon size={40} iconFillColor={"#FFFFFF"} round />
                        </a>
                <a
                  href="https://github.com/miguelsantoscoelhoduarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Visit Miguel Duarte's GitHub profile"
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
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
