const Templates = () => {
  const templates = [
    {
      id: 1,
      name: 'Landing Page Pro',
      category: 'Landing Page',
      color: 'from-blue-500 to-cyan-400',
      icon: '🚀',
      desc: 'High-conversion landing page for SaaS products.'
    },
    {
      id: 2,
      name: 'E-commerce Store',
      category: 'E-commerce',
      color: 'from-green-500 to-emerald-400',
      icon: '🛍️',
      desc: 'Complete online store with cart and checkout flows.'
    },
    {
      id: 3,
      name: 'Portfolio Modern',
      category: 'Portfolio',
      color: 'from-purple-500 to-pink-400',
      icon: '🎨',
      desc: 'Minimalist portfolio to showcase your best work.'
    },
    {
      id: 4,
      name: 'SaaS Dashboard',
      category: 'Dashboard',
      color: 'from-orange-500 to-amber-400',
      icon: '📊',
      desc: 'Data-rich dashboard with charts and analytics.'
    },
    {
      id: 5,
      name: 'Blog Template',
      category: 'Blog',
      color: 'from-pink-500 to-rose-400',
      icon: '✍️',
      desc: 'Beautiful blog layout with multiple post formats.'
    },
    {
      id: 6,
      name: 'Corporate Site',
      category: 'Corporate',
      color: 'from-indigo-500 to-blue-400',
      icon: '🏢',
      desc: 'Professional corporate website with team pages.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 animate-fade-in-up">
          Explore Premium Templates
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Jumpstart your project with our collection of professionally designed, fully responsive templates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <div
            key={template.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`h-48 bg-gradient-to-br ${template.color} flex flex-col items-center justify-center p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{template.icon}</span>
              <h3 className="text-2xl font-bold text-center tracking-tight drop-shadow-md relative z-10">{template.name}</h3>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full uppercase tracking-wider">
                  {template.category}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-sm">Free</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                {template.desc}
              </p>
              <button className="w-full py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;