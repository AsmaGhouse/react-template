const Settings = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Settings</h1>
      <p className="text-lg text-gray-600 mb-8">
        Manage your account settings and preferences.
      </p>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input type="checkbox" className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <input type="checkbox" className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Marketing Emails</span>
            <input type="checkbox" className="w-5 h-5 text-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;