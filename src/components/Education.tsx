import React from "react";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

const Education = () => {
  const courses = [
    "Estructuras de Datos y Algoritmos",
    "Programación Orientada a Objetos",
    "Inteligencia Artificial",
    "Estadísticas Aplicadas",
    "Aprendizaje Automático",
    "Programación Web"
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Educación
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Formación académica sólida en Ingeniería Informática con
              especialización en Desarrollo Web
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Ingeniero en Ciencias Informáticas
                </h3>

                <h4 className="text-xl text-blue-600 font-semibold mb-4">
                  Universidad de las Ciencias Informáticas (UCI)
                </h4>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">
                      <strong>GPA:</strong> 4.35 / 5.00
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      <strong>Graduación:</strong> Diciembre 2024
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">
                      <strong>Especialidad:</strong> Desarrollo Web
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">
                      <strong>Ubicación:</strong> La Lisa, Habana
                    </span>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">
                    Cursos Relevantes
                  </h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {courses.map((course, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
        </div>
      </div>
    </section>
  );
};

export default Education;
