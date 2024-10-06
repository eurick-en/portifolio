import myImage from '../assets/images/myImage.jpeg'; // Verifique se o caminho está correto

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-12">
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-white mb-6">Bem-vindo ao meu portfólio!</h2>
        <p className="text-3xl font-semibold text-white mb-12">
          Eu sou Henrique Sanches e sou engenheiro de software.
        </p>
        <h3 className="text-4xl font-semibold text-white">Sobre Mim</h3>
        <p className="mt-4 text-lg text-white">
          Henrique Sanches é um estudante de Engenharia de Software, atualmente cursando o segundo semestre na FIAP e atuando como Assistente de TI em uma empresa. Com habilidades em Python, JavaScript, React, HTML5 e CSS3, ele se destaca no desenvolvimento front-end, utilizando ferramentas como Figma e Framer para criar interfaces eficientes. Henrique também tem experiência com Git, GitHub e IoT, explorando o uso de Arduino e ESP32 em projetos. No momento, está desenvolvendo um portfólio pessoal, mostrando sua capacidade técnica e compromisso com a entrega de soluções inovadoras.
        </p>
      </div>
      
      {/* Contêiner da imagem com ajustes responsivos */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <img 
          src={myImage} 
          alt="Henrique Sanches" 
          className="rounded-full shadow-md max-w-xs md:max-w-sm h-auto object-cover" 
        />
      </div>
    </div>
  );
}

export default Home;
