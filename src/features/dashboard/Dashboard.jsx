import { Button } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";

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

    <div className="flex flex-col md:flex-row justify-center items-center gap-6 m-4 w-full max-w-4xl">

      {/* Total Projects */}
      <Card
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, rgba(99,102,241,0.75), rgba(168,85,247,0.75))",
          backdropFilter: "blur(10px)",
          color: "white",
          borderRadius: "18px",
          paddingY: 2,
          textAlign: "center",
          boxShadow: "0 6px 25px rgba(99, 102, 241, 0.25)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={600}>
            Total Projects
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            12
          </Typography>
        </CardContent>
      </Card>

      {/* Templates Used */}
      <Card
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, rgba(236,72,153,0.75), rgba(249,115,22,0.75))",
          backdropFilter: "blur(10px)",
          color: "white",
          borderRadius: "18px",
          paddingY: 2,
          textAlign: "center",
          boxShadow: "0 6px 25px rgba(236, 72, 153, 0.25)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={600}>
            Templates Used
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            8
          </Typography>
        </CardContent>
      </Card>

      {/* Components */}
      <Card
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, rgba(16,185,129,0.75), rgba(59,130,246,0.75))",
          backdropFilter: "blur(10px)",
          color: "white",
          borderRadius: "18px",
          paddingY: 2,
          textAlign: "center",
          boxShadow: "0 6px 25px rgba(16,185,129,0.25)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={600}>
            Components
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            45
          </Typography>
        </CardContent>
      </Card>

    </div>
    </div>
    </div>
  );
}
