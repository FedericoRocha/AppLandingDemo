import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-purple-700">FocusZen</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Características</a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Opiniones</a>
          <a href="#cta" className="text-gray-700 hover:text-purple-600 transition-colors">Comenzar</a>
        </nav>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
