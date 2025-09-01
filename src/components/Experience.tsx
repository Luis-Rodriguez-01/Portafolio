import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Especialista en Desarrollo Web Full Stack",
      company: "DATYS soluciones tecnológicas",
      location: "Playa, Habana",
      period: "Ene 2025 – Actualidad",
      achievements: [
        "Desarrollo de aplicaciones web modernas con Angular Js + Grails, optimizando rendimiento y experiencia de usuario",
        "Implementación de interfaces dinámicas con Material y diseño centrado en usabilidad",
        "Colaboración con equipos multidisciplinarios, aumentando en 25% la eficiencia del proyecto",
        "Gestión de proyectos bajo SCRUM, con entregas iterativas y pruebas continuas"
      ],
      current: true
    },
    {
      title: "Ingeniero en Desarrollo de Software Web",
      company: "UCI - Dirección de Proyectos Especiales",
      location: "La Lisa, Habana",
      period: "May 2023 – Dic 2024",
      achievements: [
        "Análisis de tráfico de sitios web mediante scripts en Java",
        "Desarrollo de microservicios con Spring Boot, conectando a bases de datos como MySQL e InfluxDB",
        "Creación de dashboards usando Grafana + Prometheus para monitoreo en tiempo real",
        "Construcción de APIs con Slim y desarrollo de interfaces con Angular"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiencia Profesional
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mi trayectoria profesional construyendo soluciones web escalables y eficientes
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden md:block shadow-lg"></div>
                  
                  <div className="md:ml-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl text-blue-600 font-semibold mb-3">
                            {exp.company}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col lg:items-end space-y-2">
                          {exp.current && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              <TrendingUp size={14} className="mr-1" />
                              Actual
                            </span>
                          )}
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar size={16} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;