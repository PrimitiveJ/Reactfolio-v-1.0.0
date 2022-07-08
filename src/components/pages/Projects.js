import React from "react";
import Cosmic from '../images/cosmic-colliders.png'
import Hongry from '../images/hongry.jpg'
import Workday from '../images/workdayschedulator.jpg'


const Projects = () => (
    <div className="project-container">
        <h1>Projects</h1>
        
        <div className="box-grid">
                <div className="box-flex box-flex-bottom-right">
                    <img src = {Cosmic}
                    style = {{maxHeight:200, maxWidth:200}} 
                    alt= "Cosmic Colliders"/>
                    <h5 className="box-caption"><a href="https://primitivej.github.io/Cosmic-Collidersv2/">Cosmic Colliders</a></h5>  
                </div>
        </div>
        
        <div className="box-grid">
            <div className="box-flex box-flex-bottom-right">
                    <img src = {Hongry}
                    style = {{maxHeight:200, maxWidth:200}} 
                    alt= "Hongry"/>
                    <h5 className="box-caption"><a href="https://hongry.herokuapp.com/">Hongry</a></h5> 
            </div>
        </div>
        
        <div className="box-grid">
            <div className="box-flex box-flex-bottom-right">
                    <img src = {Workday}
                    style = {{maxHeight:200, maxWidth:200}} 
                    alt= "Workday Schedulator"/>
                    <h5 className="box-caption"><a href="https://primitivej.github.io/Workday-Schedulatorv1.0/">Workday Schedulator</a></h5> 
            </div>
        </div>
    </div>




    

)
export default Projects;