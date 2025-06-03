import React from 'react';

const features = [
  {
    id: 1,
    title: 'Pomodoro Integrado',
    description: 'Temporizador Pomodoro integrado para mejorar tu productividad con intervalos de trabajo y descanso.',
    icon: '⏱️',
  },
  {
    id: 2,
    title: 'Organización por Proyectos',
    description: 'Agrupa tus tareas en proyectos personalizados para mantener todo organizado y accesible.',
    icon: '📁',
  },
  {
    id: 3,
    title: 'Sincronización en la Nube',
    description: 'Tus datos se sincronizan automáticamente en todos tus dispositivos.',
    icon: '☁️',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Características que te ayudarán a ser más productivo
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Todo lo que necesitas para organizar tu día y mantener el enfoque en lo importante.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
