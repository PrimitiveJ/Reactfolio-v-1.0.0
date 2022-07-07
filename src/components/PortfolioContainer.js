import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Icons from './Icons';


function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case "About": 
      return <About/>;
      case "Projects":
      return <Projects/>;
      case 'Contact':
      return <Contact/>;
        case 'Resume':
      return <Resume/>;
      case 'Icons':
      return <Icons/>;
      default: return <Home/>;
    }

  };

  return (
    <div className = "portfolio">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage(currentPage)
          
        }
      </div>
    </div>
  );
}

export default Portfolio;