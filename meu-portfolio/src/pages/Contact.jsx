import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário, se necessário
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário após envio
  };

  return (
    <div className="container mx-auto p-4 mt-12">
      <h2 className="text-4xl font-bold text-white mb-4">Contato</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
