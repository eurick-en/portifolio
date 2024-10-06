function Contact() {
    return (
      <div>
        <h2 className="text-2xl text-white">Entre em contato</h2>
        <form className="mt-4">
          <label className="block mb-2 text-white">
            Nome:
            <input type="text" className="border p-2 w-full" />
          </label>
          <label className="block mb-2 text-white">
            E-mail:
            <input type="email" className="border p-2 w-full" />
          </label>
          <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  