import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Movie Review CMS",
      description: "CMS system for different users to leave movies reviews and comments.",
      languages: "PHP - CSS - XML",
      link: "https://students.gaim.ucf.edu/~ki648110/dig3134c/assignment05/login.php",
      image: "cms.png",
    },
    {
      title: "Short Quiz App",
      description: "Beginner friends app with 3 questions with different formats.",
      languages: "React Native - JavaScript",
      link: "https://github.com/kinapolson/native-quizapp",
      image: "short-quiz.png",
    },
    {
      title: "React Native Exercise App",
      description: "Basic exercise App",
      languages: "React Native - JavaScript - CSS",
      link: "https://github.com/kinapolson/react-upd-exercise",
      image: "exer.png",
    },
    {
      title: "Menu App",
      description: "Data-driven menu page.",
      languages: "React - JavaScript - CSS",
      link: "https://github.com/kinapolson/react-menu-app/tree/main/menu-app",
      image: "menu.png",

    }
  ];

  return (
    <div className="projects-page">
      <h1 id="header">PROJECTS</h1>
      {projects.map((project, index) => (
        <div key={index} className="section">
          <div className="text">
            <h1 id="projectTitle">{project.title}</h1>
            {project.image && (
              <img
                src={require(`../../assets/${project.image}`)}
                alt={project.title}
                className="project-img"
              />
            )}
            <p className="projectDescrip"><strong>Languages:</strong> {project.languages}</p>
            <p className="projectDescrip">{project.description}</p>
            <br></br>
            <a id="vpl" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
