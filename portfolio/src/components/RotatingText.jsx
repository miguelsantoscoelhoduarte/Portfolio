import React, { useState, useEffect } from 'react';

function RotatingText() {
  const phrases = [
    "A Full Stack Developer.",
    "A Software Engineer.",
    "A Cooking Enthusiast.",
    "A Padel Player."
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const changeTextInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500)
      
    }, 3000); 
    
    return () => clearInterval(changeTextInterval);
  }, []);
  
  return (
    <p className={`text-3xl font-bold text-center text-blue-50 mt-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {phrases[currentPhraseIndex]}
    </p>
  );
}

export default RotatingText;
