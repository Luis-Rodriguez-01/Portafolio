import React from 'react';
import { ExternalLink, Users, TrendingUp, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Catálogo de Productos Artesanales",
      description: "Aplicación e-commerce completa desarrollada con React, integración con APIs RESTful. Logré una reducción del 20% en la carga mediante optimización reactiva.",
      technologies: ["React","Django", "JavaScript", "TypeScript","Python", "RESTful APIs", "Tailwind CSS"],
      achievements: [
        "Reducción de 20% en carga mediante optimización reactiva",        
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      type: "E-commerce",
      team: false,
      link: "https://luisyoiselrodriguezcaballero.pythonanywhere.com/"
    },
    {
      title: "Módulo de Gestión de Variables SEO",
      description: "Módulo desarrollado para la UCI que permite medir y monitorizar nuevas metricas a los sitios web subscritos.",
      technologies: ["Java","PHP", "SpingBoot", "MySQL","Slim", "Interactive Maps"],
      achievements: [
        "Implementación de variables SEO para sitios nacionales",
        "Desarrollado en colaboración con equipo de 2 personas"
      ],
      icon: <MapPin className="w-6 h-6" />,
      type: "SEO",
      team: true,
      link: "https://github.com/migueldeltorodev/Monitor.ModuloGestion"
    },
    {
      title: "Automatización de paneles de variables SEO ",
      description: "Sistema desarrollado para la UCI que permite el control y gestión de variables SEO para sitios web nacionales. Backend desarrollado con Slim.",
      technologies: ["Slim", "PHP", "SEO Management"],
      achievements: [
        "Mejora del control de variables SEO para sitios nacionales",
        "Interfaz intuitiva para gestión de metadatos",
        "Integración con Telus herramienta de monitoreo"
      ],
      icon: <Users className="w-6 h-6" />,
      type: "SEO",
      team: false,
      link: "https://github.com/Luis-Rodriguez-01/Automatizaci-n-Tesis"
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

export default Projects;