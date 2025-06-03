import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FocusZen</h3>
            <p className="text-gray-400">
              La mejor herramienta para mejorar tu productividad y concentración.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Características</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Precios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Aplicación móvil</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Términos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FocusZen. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
