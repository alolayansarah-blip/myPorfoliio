"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-[#ccd6f6] mb-4">404</h2>
        <p className="text-xl text-[#8892b0] mb-6">Page Not Found</p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#112240] border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

