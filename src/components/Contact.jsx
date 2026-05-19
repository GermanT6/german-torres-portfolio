const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="text-4xl font-bold mb-8">
        Contacto
      </h2>

      <form className="max-w-2xl flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 outline-none"
        />

        <textarea
          rows="6"
          placeholder="Mensaje"
          className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 outline-none"
        />

        <button className="bg-primary hover:bg-secondary transition text-white py-4 rounded-xl">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Contact;
