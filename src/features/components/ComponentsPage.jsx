const ComponentsPage = () => {
  const components = [
    { id: 1, name: 'Navigation Bar', category: 'Navigation', icon: '🧭' },
    { id: 2, name: 'Hero Section', category: 'Hero', icon: '🎯' },
    { id: 3, name: 'Card Component', category: 'UI', icon: '🎴' },
    { id: 4, name: 'Form Elements', category: 'Forms', icon: '📝' },
    { id: 5, name: 'Footer', category: 'Layout', icon: '📄' },
    { id: 6, name: 'Modal Dialog', category: 'UI', icon: '💬' },
    { id: 7, name: 'Sidebar Menu', category: 'Navigation', icon: '📋' },
    { id: 8, name: 'Button Variants', category: 'UI', icon: '🔘' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Library</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our collection of reusable components built with React, Tailwind CSS, and Material-UI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {components.map((component) => (
          <div
            key={component.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-3">{component.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{component.name}</h3>
            <span className="inline-block px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full">
              {component.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;