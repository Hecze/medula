"use client"
import NewsLatterBox from "./NewsLatterBox";
import { useEffect, useState } from "react";
import Button from "../button";
import FadeInSection from "../FadeInSection";
import Script from "next/script";

interface ContactProps {
  bg?: boolean;
}

const Contact: React.FC<ContactProps> = ({ bg = true }) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para indicar si el formulario se está enviando


  const handleSend = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (isSubmitting) { // Si ya está en proceso de envío, no hagas nada
      return;
    }

    if (!email || !name || !message) {
      console.error("All fields are required");
      return;
    }

    setIsSubmitting(true); // Establece el estado en true para indicar que se está enviando el formulario

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, message })

    });

    console.log("Sending body:", JSON.stringify({ email, name, message }));

    if (res.ok) {
      console.log('Message sent successfully');
      setEmail('');
      setName('');
      setMessage('');
      
      console.log(res)
    } else {
      console.log('Message not sent');
    }

    setIsSubmitting(false); // Establece el estado en false después de completar el envío o en caso de error
  }

  useEffect(() => {
    setSubject("name: " + name + " email: " + email + " message: " + message);
  }, [email, name, message]);

  return (
    <FadeInSection animationClass="animate-fade-in-down-10 " threshold={0.25}>

<section id="contact" className={`overflow-hidden ${bg ? "bg-slate-900 p-24 py-16 md:py-20 lg:py-28" : "p-16"}`}>

        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
              "
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Conversemos
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                Nuestro equipo te responderá instantáneamente para atender cualquiera de tus preguntas.
                </p>
                <form onSubmit={handleSend}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Nombre
                        </label>
                        <input
                          type="text"
                          placeholder='Escribe tu nombre aquí'
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          placeholder='Escribe tu correo electrónico aquí'
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Tu mensaje
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder='Escribe tu mensaje aquí'
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                    <Button type="submit" disabled={isSubmitting}> {/* Deshabilitar el botón si el formulario se está enviando */}
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Contact;
