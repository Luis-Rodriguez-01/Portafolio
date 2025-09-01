import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full Stack Developer",
      description: "Especializado en React, Angular y Django para soluciones completas"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "3+ Años de Experiencia",
      description: "Desarrollando aplicaciones escalables y centradas en el usuario"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Arquitectura Robusta",
      description: "APIs REST, microservicios y metodologías ágiles como SCRUM"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Diseño Responsivo",
      description: "Interfaces modernas optimizadas para cualquier dispositivo"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Mí
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Soy un <strong>Desarrollador Web Full Stack</strong> con sólida formación en Ingeniería Informática, 
              especializado en crear soluciones tecnológicas escalables y eficientes. Con más de 3 años de experiencia, 
              he desarrollado desde dashboards para monitoreo hasta plataformas de e-commerce y sistemas de reservas.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Mi enfoque se centra en construir productos robustos, bien diseñados y centrados en el usuario, 
              utilizando las mejores prácticas de desarrollo y metodologías ágiles. Me apasiona transformar ideas 
              complejas en interfaces intuitivas y funcionales.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Graduado de la Universidad de las Ciencias Informáticas (UCI) con un GPA de 4.35/5.00, 
              combino conocimientos sólidos en algoritmos y estructuras de datos con experiencia práctica 
              en tecnologías modernas como React, Angular, Django y metodologías SCRUM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;