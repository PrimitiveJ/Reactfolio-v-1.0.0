import React from "react";

const backEndSkills= ["MongoDB", "Mongoose", "MySQL", "Sequelize","Express", "API's", "REST", "GraphQL", "Inquirer/Jest" ]
const frontEndSkills = [ "Javascript", "HTML", "CSS", "Jquery", "React",  "Handlebars", "Node", "Bootstrap",]

const listItems1 = frontEndSkills.map((frontEndSkill) =>
<li key = {frontEndSkill.toString()}>
{frontEndSkill}
</li>,
) 

const listItems2 = backEndSkills.map((backEndSkill) =>
<li key = {backEndSkill.toString()}>
{backEndSkill}
</li>,
) 


const Resume = () => (
  <div>
    <a href = '#'> Resume</a>
    <ul> <h1>Front End Skills</h1>
        {listItems1}
    </ul>
    <ul> <h1>Back End Skills</h1>
        {listItems2}
    </ul>
  </div>
);

export default Resume;