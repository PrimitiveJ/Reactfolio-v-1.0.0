import React from "react";


const Projects = () => (
    <div className="project-container">
        <h1>Projects</h1>
        
        <div class="box-grid">
                <div class="box-flex box-flex-bottom-right">
                    <img src = "./images/cosmic-colliders.png" 
                    style = {{maxWidth:200, maxHeight:200}}
                    alt= "Cosmic Colliders"/>
                    <h5 class="box-caption"><a href="https://primitivej.github.io/Cosmic-Collidersv2/">Cosmic Colliders</a></h5>  
                </div>
        </div>
        
        <div class="box-grid">
            <div class="box-flex box-flex-bottom-right">
                    <img src = "./images/hongry.jpg"
                    style = {{maxHeight:150, maxWidth:200}} 
                    alt= "Hongry"/>
                    <h5 class="box-caption"><a href="https://hongry.herokuapp.com/">Hongry</a></h5> 
            </div>
        </div>
        
        <div class="box-grid">
            <div class="box-flex box-flex-bottom-right">
                    <img src = "./images/workdayschedulator.jpg"
                    style = {{maxHeight:150, maxWidth:200}} 
                    alt= "Workday Schedulator"/>
                    <h5 class="box-caption"><a href="https://primitivej.github.io/Workday-Schedulatorv1.0/">Workday Schedulator</a></h5> 
            </div>
        </div>
    </div>




    

)
export default Projects;