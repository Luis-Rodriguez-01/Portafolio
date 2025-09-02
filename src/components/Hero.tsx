import React from 'react';
import { ArrowDown, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white text-4xl font-bold">LR</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Luis Yoisel<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Rodriguez Caballero
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Web Full Stack especializado en crear soluciones escalables y eficientes 
            con más de 3 años de experiencia en React, Angular, Django...
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <a
              href="mailto:luisyoisel.rodriguezcaballero@gmail.com"
              className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>luisyoisel.rodriguezcaballero@gmail.com</span>
            </a>
            <a
              href="tel:+5355553052"
              className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
            >
              <Phone size={20} />
              <span>+53 5 5553052</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-yoisel-rodriguez-caballero-75598732a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Mi Trabajo
            </button>
            <a
              href="mailto:luisyoisel.rodriguezcaballero@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          aria-label="Ir a la sección sobre mí"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
