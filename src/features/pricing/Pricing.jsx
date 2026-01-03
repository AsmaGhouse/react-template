import { Card, CardContent, Button, Chip } from "@mui/material";

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: ['5 Templates', '10 Components', 'Basic Support', 'Community Access'],
      buttonColor: 'bg-gray-700 hover:bg-gray-800',
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: ['20 Templates', '50 Components', 'Priority Support', 'Advanced Features', 'Custom Branding'],
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: ['Unlimited Templates', 'Unlimited Components', '24/7 Support', 'Custom Development', 'Dedicated Manager'],
      buttonColor: 'bg-gray-700 hover:bg-gray-800',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 max-h-full">
      
      {/* Heading */}
      <div className="text-center pb-4">
        <h1 className="text-4xl font-bold text-gray-900 ">Pricing Plans</h1>
        <p className="text-lg text-gray-600">
          Choose the perfect plan for your needs
        </p>
      </div>
      <div className="flex">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Cards */}
      <div className="mt-4">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`
              shadow-xl rounded-2xl text-center transition-all duration-300
              hover:shadow-2xl 
            `}
            sx={{ borderRadius: "16px", border: "none" }} // <- no border
            elevation={4}
          >
            <CardContent className="p-10">
              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 text-center">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex justify-center items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                fullWidth
                variant="contained"
                className={`text-white! py-3! rounded-lg! font-semibold! ${plan.buttonColor}`}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Pricing;
