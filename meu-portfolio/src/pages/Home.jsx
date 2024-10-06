
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importando ícones

function Home() {
  return (
    <div className="flex flex-col h-screen justify-between"> {/* Ajuste aqui */}
      <div className="flex flex-col items-start justify-start flex-grow px-4 mt-20">
        <h2 className="text-5xl font-bold text-white mb-1 mt-20">Bem-vindo ao meu portfólio!</h2>
        <p className="text-3xl font-semibold text-white mt-20">Eu sou Henrique Sanches e eu sou engenheiro de software</p>
      </div>

      {/* Div grande para ocupar espaço, sem cor de fundo */}
      <div className="mt-32 w-full flex flex-col justify-center items-start p-4 flex-grow "> 
        <h3 className="text-4xl font-semibold text-white ">Sobre Mim</h3>
        <p className="mt-2 text-lg text-white mt-12">
        Henrique Sanches é um estudante de Engenharia de Software, atualmente cursando o segundo semestre na FIAP e atuando como Assistente de TI em uma empresa. Com habilidades em Python, JavaScript, React, HTML5, CSS3 e UX/UI, ele se destaca no desenvolvimento front-end, utilizando ferramentas como Figma e Framer para criar interfaces eficientes. Henrique também tem experiência com Git, GitHub e IoT, explorando o uso de Arduino e ESP32 em projetos. No momento, está desenvolvendo um portfólio pessoal, mostrando sua capacidade técnica e compromisso com a entrega de soluções inovadoras.

        </p>
      </div>

      {/* Ícones das redes sociais */}

    </div>
  );
}

export default Home;
