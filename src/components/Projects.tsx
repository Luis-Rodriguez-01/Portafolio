import React from 'react';
import { ExternalLink, Github, Users, TrendingUp, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sitio de Ventas Productos Artesanales",
      description: "Aplicación e-commerce completa desarrollada con React, incluyendo autenticación de usuarios, carrito de compras y integración con APIs RESTful. Logré una reducción del 20% en la carga mediante optimización reactiva.",
      technologies: ["React", "JavaScript", "RESTful APIs", "Authentication"],
      achievements: [
        "Reducción de 20% en carga mediante optimización reactiva",
        "Sistema completo de autenticación y carrito de compras",
        "Desarrollado en colaboración con equipo de 3 personas"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      type: "E-commerce",
      team: true
    },
    {
      title: "Sitio de Reservas para Playas y Campismos",
      description: "Plataforma Full Stack desarrollada con React y Django para la gestión de reservas de destinos turísticos. Incluye mapas interactivos, sistema de filtros avanzados y gestión de datos con MySQL.",
      technologies: ["React", "Django", "MySQL", "Interactive Maps"],
      achievements: [
        "Implementación de mapas interactivos para mejor UX",
        "Sistema de filtros avanzados para búsqueda optimizada",
        "Gestión completa de reservas y disponibilidad"
      ],
      icon: <MapPin className="w-6 h-6" />,
      type: "Booking Platform",
      team: false
    },
    {
      title: "Módulo de Gestión de Variables SEO",
      description: "Sistema desarrollado para la UCI que permite el control y gestión de variables SEO para sitios web nacionales. Backend desarrollado con Slim y frontend con Angular.",
      technologies: ["Angular", "Slim", "PHP", "SEO Management"],
      achievements: [
        "Mejora del control de variables SEO para sitios nacionales",
        "Interfaz intuitiva para gestión de metadatos",
        "Integración con múltiples sitios web institucionales"
      ],
      icon: <Users className="w-6 h-6" />,
      type: "Web Management",
      team: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proyectos Destacados
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mi experiencia en desarrollo Full Stack
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                      <Users size={20} className="text-gray-400" title="Proyecto en equipo" />
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
                      <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
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

export default Projects;