import React from 'react';


function Header(props) {
    const tabs = ['Home', 'About', 'Projects', 'Contact', 'Resume', 'Icons'];
    return (
    <div className="header-container">
      <ul className="nav nav-tabs">
        <h1 className = "header-name">Christopher James Hoke</h1>
        {tabs.map(tab => (
          <li className="nav-item" key={tab} style = {{display:'flex', justifyContent:'space-between'}}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      </div>
    );
}

export default Header