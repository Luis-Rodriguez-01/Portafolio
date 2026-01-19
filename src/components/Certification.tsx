import React from 'react';
import { ExternalLink, Users, Brain, Cpu } from 'lucide-react';
import {  } from 'lucide-react';

const Certifications = () => {
const certifications = [
  {
    title: "Introducción a la Inteligencia Artificial",
    description: "Certificación orientada a los fundamentos de la Inteligencia Artificial, incluyendo conceptos clave de machine learning, automatización y uso responsable de IA.",
    technologies: [
      "Inteligencia Artificial",
      "Machine Learning",
      "Prompt Engineering",
      "Ética en IA",
      "Automatización"
    ],
    achievements: [
      "Comprensión de los fundamentos de la IA y su aplicación práctica",
      "Uso de herramientas de IA para resolución de problemas",
      "Análisis de impactos éticos y sociales de la IA"
    ],
    icon: <Brain className="w-6 h-6" />,
    type: "Artificial Intelligence",
    team: false,
    link: `${import.meta.env.BASE_URL}/certificates/introduccion-ia.pdf`

  },
  {
    title: "Desarrollo con Inteligencia Artificial",
    description: "Certificación enfocada en el desarrollo de soluciones de software potenciadas por IA, integración de modelos y optimización de procesos mediante automatización inteligente.",
    technologies: [
      "IA aplicada",
      "APIs de IA",
      "Automatización de procesos",
      "Integración de modelos",
      "Desarrollo Full Stack con IA"
    ],
    achievements: [
      "Integración de IA en aplicaciones reales",
      "Diseño de flujos inteligentes para automatización",
      "Optimización de procesos de desarrollo mediante IA"
    ],
    icon: <Cpu className="w-6 h-6" />,
    type: "AI Development",
    team: false,
    link: `${import.meta.env.BASE_URL}/certificates/desarrollo-ia.pdf`
  },
  {
  title: "Inteligencia Artificial: Fundamentos y Aplicaciones Prácticas",
  description:
    "Certificación orientada a la comprensión de la Inteligencia Artificial moderna, sus principios fundamentales y su aplicación práctica en distintos contextos profesionales y tecnológicos.",
  technologies: [
    "Inteligencia Artificial",
    "IA Generativa",
    "Prompt Engineering",
    "Automatización asistida por IA",
    "Herramientas de IA"
  ],
  achievements: [
    "Comprensión de los conceptos fundamentales de la Inteligencia Artificial",
    "Identificación de aplicaciones prácticas de la IA en entornos reales",
    "Uso básico de herramientas de IA para optimizar tareas y procesos",
    "Análisis del impacto de la IA en el ámbito profesional y tecnológico"
  ],
  icon: <Brain className="w-6 h-6" />,
  type: "Applied AI",
  team: false,
  link: `${import.meta.env.BASE_URL}/certificates/certificado-jon.pdf`
}
];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certificados Digitales
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una selección de Certificaciones que acreditan mi preparación
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {project.icon}
                      </div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    {project.team && (
                      <Users size={20} className="text-gray-400" aria-braillelabel="Proyecto en equipo" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Logros Principales:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <button onClick={() => window.open(project.link, "_blank")}
                       className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                        <ExternalLink size={16} />
                        <span>Ver Detalles</span>
                      </button>
                    </div>
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

export default Certifications;