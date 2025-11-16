const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: ['5 Templates', '10 Components', 'Basic Support', 'Community Access'],
      color: 'border-gray-300',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: ['20 Templates', '50 Components', 'Priority Support', 'Advanced Features', 'Custom Branding'],
      color: 'border-indigo-500',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: ['Unlimited Templates', 'Unlimited Components', '24/7 Support', 'Custom Development', 'Dedicated Manager'],
      color: 'border-gray-300',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
        <p className="text-lg text-gray-600">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg shadow-lg border-2 ${plan.color} p-8 relative ${plan.popular ? 'transform scale-105' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-600">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-semibold transition-colors duration-200`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;