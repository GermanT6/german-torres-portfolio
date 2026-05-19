import { useState } from "react";

import { motion } from "framer-motion";

import {
  FiMail,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

import Reveal from "./ui/Reveal";

function Contact() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formspree.io/f/xeedekvl",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSuccess(true);

      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  }

  return (
    <section
      id="contact"
      className="section-container"
    >
      <Reveal>
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Contacto
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            ¿Tenés una propuesta, proyecto o simplemente
            querés contactarme? Completá el formulario y
            te responderé lo antes posible.
          </p>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto">
        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          
          {/* TOP GRID */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            
            {/* NAME */}
            <div>
              <label className="block mb-3 font-medium">
                Nombre y apellido
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Tu nombre"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-primary outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-3 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="tuemail@gmail.com"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-primary outline-none transition"
              />
            </div>
          </div>

          {/* SUBJECT */}
          <div className="mb-6">
            <label className="block mb-3 font-medium">
              Asunto
            </label>

            <input
              type="text"
              name="subject"
              required
              placeholder="Asunto del mensaje"
              className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-primary outline-none transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-8">
            <label className="block mb-3 font-medium">
              Mensaje
            </label>

            <textarea
              name="message"
              required
              rows="6"
              placeholder="Escribí tu mensaje..."
              className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-primary outline-none transition resize-none"
            />
          </div>

          {/* SUCCESS */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3 rounded-2xl bg-green-500/10 border border-green-500/20 px-5 py-4 text-green-600"
            >
              <FiCheckCircle />

              Mensaje enviado correctamente
            </motion.div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary hover:bg-secondary transition text-white font-semibold shadow-xl"
          >
            <FiSend />

            Enviar mensaje
          </button>

          {/* EXTRA */}
          <div className="mt-8 flex items-center gap-3 text-slate-500">
            <FiMail />

            <span>
              También podés escribirme directamente a{" "}
              <strong>
                gertorres30@gmail.com
              </strong>
            </span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;