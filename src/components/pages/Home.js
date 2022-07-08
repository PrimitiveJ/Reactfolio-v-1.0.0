import React from "react";
import Me from "../images/RETROJOYYY.jpg"
const Home = () => (
  <div>
    <img src = {Me} 
                    style = {{maxWidth:200, maxHeight:200, borderRadius:500, borderColor:"black"}}
                    alt= "Christopher Hoke"/>
    <h1>Christopher James Hoke</h1>
    <p>
      Web Developer, Teacher, Musician, Life-Long Learner. 
    </p>
  </div>
);

export default Home;