import React from "react";

const LogosCarousel = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">
          Technologies I Use
        </h2>
        <div className="flex overflow-hidden group">
          <div className="flex space-x-8 animate-loop-scroll group-hover:paused">
            {/* Logo Item */}
            {[...Array(100)].flatMap((_, i) =>
              [
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React
                "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", // Next.js
                "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", // Express.js
                "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JavaScript
                "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // HTML5
                "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", // CSS3
                "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", // Node.js
                "https://golang.org/dl/golang-logo.svg", // Go (from official Go developers)
                "https://raw.githubusercontent.com/microsoft/TypeScript-Website/master/logo.svg", // TypeScript (from GitHub)
                "https://raw.githubusercontent.com/tailwindlabs/tailwindcss.com/main/public/logos/tailwindcss.svg", // Tailwind CSS (from GitHub)
              ].map((src, index) => (
                <img
                  key={i * 10 + index}
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="w-20 h-20 grayscale hover:grayscale-0 transition duration-300 snap-center"
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
