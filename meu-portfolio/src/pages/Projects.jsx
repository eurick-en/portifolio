import React from 'react';
import { Link } from 'react-router-dom';

const projectsList = [
  {
    id: 1,
    title: "Projeto Front-end",
    description: "Challenge FIAP-2024",
  },
  {
    id: 2,
    title: "Projeto GS Arduino",
    description: "Arduino Marinha",
  },
  {
    id: 3,
    title: "Projeto back-end Python",
    description: "Curso Alura",
  },
];

function Projects() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-white mb-4">Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsList.map((project) => (
          <div key={project.id} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="text-white mt-2">{project.description}</p>
            <Link
              to={`/projects/${project.id}`}
              className="text-blue-400 mt-4 inline-block"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
