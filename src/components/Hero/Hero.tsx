import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Enfócate en lo que realmente importa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            FocusZen te ayuda a organizar tus tareas, mantener la concentración y alcanzar tus metas diarias con facilidad.
          </p>
          <button className="bg-purple-600 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
            Probar gratis
          </button>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="bg-white p-2 rounded-xl shadow-2xl max-w-4xl w-full">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 h-80 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-white mb-2">FocusZen App</h3>
                <p className="text-purple-100">Aquí iría una captura de pantalla de la aplicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
