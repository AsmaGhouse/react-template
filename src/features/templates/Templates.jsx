const Templates = () => {
  const templates = [
    { id: 1, name: 'Landing Page Pro', category: 'Landing Page', color: 'bg-blue-500' },
    { id: 2, name: 'E-commerce Store', category: 'E-commerce', color: 'bg-green-500' },
    { id: 3, name: 'Portfolio Modern', category: 'Portfolio', color: 'bg-purple-500' },
    { id: 4, name: 'SaaS Dashboard', category: 'Dashboard', color: 'bg-orange-500' },
    { id: 5, name: 'Blog Template', category: 'Blog', color: 'bg-pink-500' },
    { id: 6, name: 'Corporate Site', category: 'Corporate', color: 'bg-indigo-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Templates</h1>
      <p className="text-lg text-gray-600 mb-8">
        Browse our collection of professionally designed templates for modern web development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div 
            key={template.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`${template.color} h-40 flex items-center justify-center`}>
              <span className="text-white text-2xl font-bold">{template.name}</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{template.name}</h3>
              <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                {template.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;