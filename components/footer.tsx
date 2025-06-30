import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Michael Antiquina. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js, TypeScript, Tailwind CSS, Framer Motion, and deployed on Vercel.
      </p>
      <p className="mt-1 text-xs italic">
        Design inspired by <a href="https://github.com/ByteGrad/portfolio-website" target="_blank" rel="noopener noreferrer" className="underline">ByteGrad (GitHub)</a>.
      </p>
    </footer>
  );
}
