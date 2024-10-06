import React from 'react';
import { useParams } from 'react-router-dom';
import r4 from '../assets/images/r4.png';
import gs from '../assets/images/gs.png';
import py from '../assets/images/py.png'

const projectsList = [
  {
    id: 1,
    title: "Projeto Race4Green",
    description: "A imagem ilustra uma página web desenvolvida em front-end para o Challenge FIAP, utilizando HTML e CSS. O design apresenta um layout responsivo e atrativo, incorporando elementos semânticos e estilos personalizados. A página foi projetada para demonstrar as habilidades adquiridas em programação web, destacando a estética visual e a usabilidade, características essenciais em projetos da FIAP..",
    details: "HTML, CSS e back-end",
    imageUrl: r4 // Corrigido aqui
  },
  {
    id: 2,
    title: "Projeto Marinha do Brasil",
    description: "Monitoramento de Caminhões de Lixo Descrição do Projeto O projeto de Monitoramento de Caminhões de Lixo tem como objetivo sensibilizar e conscientizar o público sobre a poluição nos oceanos, destacando a quantidade de lixo que é despejada diariamente. Através de um contador digital, o projeto visa visualizar, em tempo real, o número de caminhões de lixo sendo despejados nos oceanos a cada minuto.",
    details: "C++",
    imageUrl: gs

  },
  {
    id: 3,
    title: "Projeto Python",
    description: "A imagem mostra uma prova de Python, contendo perguntas sobre conceitos básicos da linguagem, como variáveis, tipos de dados, estruturas de controle e funções. Os alunos são solicitados a resolver pequenos exercícios práticos, demonstrando sua compreensão dos fundamentos da programação em Python. A prova é projetada para avaliar a capacidade dos alunos de aplicar o que aprenderam em aula de forma clara e objetiva.",
    details: "Python",
    imageUrl: py
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsList.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-white">{project.title}</h2>
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover rounded my-4" />
      )}
      <p className="text-white mt-4">{project.description}</p>
      <p className="text-white mt-2">{project.details}</p>
    </div>
  );
}

export default ProjectDetails;
