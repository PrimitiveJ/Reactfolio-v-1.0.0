import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //
    switch (currentPage) {
      case "About": 
      return <About/>;
      case "Projects":
      return <Projects/>;
      case 'Contact':
      return <Contact/>;
        case 'Resume':
      return <Resume/>;
      default: return <Home/>;
    }

  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          // YOUR CODE HERE
          //
          renderPage(currentPage)
        }
      </div>
    </div>
  );
}

export default Portfolio;