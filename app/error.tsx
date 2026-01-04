"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[#ccd6f6] mb-4">
          Something went wrong!
        </h2>
        <p className="text-[#8892b0] mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#112240] border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

