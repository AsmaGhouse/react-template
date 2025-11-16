import { Button } from "@mui/material";

export default function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <div className="w-full flex flex-col items-center mt-2 px-4">

      {/* Subtitle */}
      <p className="text-sm text-blue-500 font-medium mb-3">
        Fast & SEO Optimized
      </p>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center leading-tight">
        Website Templates for <br className="hidden md:block" />
        modern stacks.
      </h1>

      {/* Description */}
      <p className="text-center text-gray-600 mt-4 max-w-2xl">
        Launch your SEO friendly fully-functional website or landing pages 
        within hours with Fast Page Speed. Built with HTML5, Next.js, Astro, 
        Tailwind CSS & Sanity CMS.
      </p>

      {/* CTA Buttons */}
      <div className="m-8 flex justify-center gap-4">

        {/* Browse Templates Button */}
        <Button
          variant="contained"
          sx={{
            paddingX: 3,
            paddingY: 1.5,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            background: "linear-gradient(90deg, #6366F1, #A855F7)",
            boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
            "&:hover": {
              background: "linear-gradient(90deg, #4F46E5, #9333EA)",
            },
          }}
        >
          Browse All Templates
        </Button>

        {/* Component Library Button */}
        <Button
          variant="contained"
          sx={{
            paddingX: 3,
            paddingY: 1.5,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            background: "linear-gradient(90deg, #111827, #1F2937)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
            "&:hover": {
              background: "linear-gradient(90deg, #0F172A, #1E293B)",
            },
          }}
        >
          Component Library
        </Button>
      </div>

     {/* Stats Section */}
<div className="flex flex-col md:flex-row justify-center items-center gap-6 m-4 w-full max-w-4xl">

  <div className="border rounded-xl py-6 px-8 text-center shadow-sm flex-1">
    <p className="text-lg font-semibold">Total Projects</p>
    <p className="text-3xl font-bold text-purple-600">12</p>
  </div>

  <div className="border rounded-xl py-6 px-8 text-center shadow-sm flex-1">
    <p className="text-lg font-semibold">Templates Used</p>
    <p className="text-3xl font-bold text-purple-600">8</p>
  </div>

  <div className="border rounded-xl py-6 px-8 text-center shadow-sm flex-1">
    <p className="text-lg font-semibold">Components</p>
    <p className="text-3xl font-bold text-purple-600">45</p>
  </div>

</div>

    </div>
    </div>
  );
}
