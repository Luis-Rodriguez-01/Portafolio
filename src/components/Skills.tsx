import React from 'react';
import { Code, Database, Settings, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "React", level: 95 },
        { name: "React Native", level: 85 },
        { name: "Angular", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "TailwindCSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      icon: <Settings className="w-8 h-8 text-green-600" />,
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Django", level: 85 },
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "Grails", level: 75 }
      ]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Oracle", level: 75 },
        { name: "InfluxDB", level: 70 }
      ]
    },
    {
      title: "Herramientas & DevOps",
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 95 },
        { name: "AWS", level: 60 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  const methodologies = [
    "SCRUM", "Agile", "Extreme Programming (XP)", "RESTful APIs", 
    "WebSockets", "Testing Unitario", "Microservicios"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Habilidades Técnicas
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones web completas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Methodologies Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Metodologías y Tecnologías Adicionales
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {methodologies.map((methodology, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  {methodology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;