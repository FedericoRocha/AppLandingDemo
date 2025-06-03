import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          ¿Listo para mejorar tu productividad?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Únete a miles de personas que ya están logrando más con FocusZen. Es gratis para empezar.
        </p>
        <button className="bg-white text-purple-700 font-semibold text-lg px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
          Comenzá hoy con FocusZen
        </button>
        <p className="mt-4 text-purple-200">
          Sin tarjeta de crédito requerida - Cancelá en cualquier momento
        </p>
      </div>
    </section>
  );
};

export default CTA;
