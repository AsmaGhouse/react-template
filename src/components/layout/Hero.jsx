import { Button } from '@mui/material';

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <span className="px-6 py-2 text-sm font-medium text-indigo-600 bg-white border-2 border-indigo-200 rounded-full">
            Fast & SEO Optimized
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-3xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Website Templates for<br />modern stacks.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-md text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Launch your SEO friendly fully-functional website or landing pages within hours with
          Fast Page Speed. Built with HTML5, Next.js, Astro, Tailwind CSS & Sanity CMS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 14px 0 rgba(102, 126, 234, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                boxShadow: '0 6px 20px 0 rgba(102, 126, 234, 0.5)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Browse All Templates
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              background: '#2d3748',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 14px 0 rgba(45, 55, 72, 0.4)',
              '&:hover': {
                background: '#1a202c',
                boxShadow: '0 6px 20px 0 rgba(45, 55, 72, 0.5)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Component Library
          </Button>
        </div>

       

        {/* Technology Stack Label */}
        <div className="mt-16">
          <p className="text-sm text-gray-500">
            Our <span className="font-semibold text-indigo-600">JAM Stack</span> Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;