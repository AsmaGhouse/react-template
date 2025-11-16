const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to your dashboard. Here you can manage your projects and templates.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Projects</h3>
          <p className="text-3xl font-bold text-indigo-600">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Templates Used</h3>
          <p className="text-3xl font-bold text-indigo-600">8</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Components</h3>
          <p className="text-3xl font-bold text-indigo-600">45</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;