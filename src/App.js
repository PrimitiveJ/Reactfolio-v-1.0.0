import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
import {BreakpointProvider} from './breakpoint'



const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  or: '(orientation: portrait)',
}


const App = () => 
<div className="app-container">
<BreakpointProvider queries={queries}>
<PortfolioContainer />
</BreakpointProvider>
</div>

export default App;

