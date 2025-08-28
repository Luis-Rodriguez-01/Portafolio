import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <span className="text-2xl font-bold">Andy Santana</span>
            </div>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Desarrollador Web Full Stack especializado en crear soluciones escalables y eficientes. 
              Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <a
                href="mailto:santanaandyjesus7@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                santanaandyjesus7@gmail.com
              </a>
              <a
                href="tel:+5355359427"
                className="text-gray-300 hover:text-white transition-colors"
              >
                +53 5 5359427
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                  © {currentYear} Andy Jesús Santana Sánchez. Todos los derechos reservados.
                </p>
                
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <span>Hecho con</span>
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>y</span>
                  <Code className="w-4 h-4 text-blue-500" />
                  <span>en React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;