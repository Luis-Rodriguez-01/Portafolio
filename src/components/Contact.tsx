import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_y27c6gi",      
      "template_2jznq9i",     
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        email: "luisyoisel.rodriguezcaballero@gmail.com", 
        name: "Luis Yoisel Rodriguez Caballero"
      },
      { publicKey: "IF3nQWmmuDXQhVIWA" }      
    ).then(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 3000);
    }).catch((error) => {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "luisyoisel.rodriguezcaballero@gmail.com",
      link: "mailto:luisyoisel.rodriguezcaballero@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+53 5 5553052",
      link: "tel:+5355553052"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      content: "Luis Yoisel Rodriguez Caballero",
      link: "https://www.linkedin.com/in/luis-yoisel-rodriguez-caballero-75598732a/"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trabajemos Juntos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y explorar cómo podemos hacerla realidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-3">
                  ¿Por qué trabajar conmigo?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>3+ años de experiencia en desarrollo Full Stack</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Especializado en React, Angular, Spring Boot y Django</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Metodologías ágiles y entregas de calidad</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Enfoque en experiencia de usuario y rendimiento</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Envíame un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      ¡Mensaje Enviado!
                    </h4>
                    <p className="text-gray-600">
                      Gracias por contactarme. Te responderé pronto.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="¿En qué puedo ayudarte?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;