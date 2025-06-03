import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Martínez',
    role: 'Diseñadora UI/UX',
    content: 'FocusZen ha transformado mi forma de trabajar. Ahora soy mucho más productiva y organizada.',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Desarrollador Full Stack',
    content: 'La integración del Pomodoro con las tareas es increíble. Me ha ayudado a mantener el enfoque.',
    rating: 5,
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Laura Gómez',
    role: 'Estudiante',
    content: 'Perfecta para organizar mis estudios y tareas. La sincronización entre dispositivos es perfecta.',
    rating: 4,
    avatar: '👩‍🎓',
  },
];

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Descubre cómo FocusZen está ayudando a personas como tú a ser más productivos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <div className="text-yellow-400 text-xl mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-purple-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
