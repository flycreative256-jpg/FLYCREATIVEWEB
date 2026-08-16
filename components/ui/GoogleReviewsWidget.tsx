"use client";

import React from "react";

export function GoogleReviewsWidget() {
  return (
    <div className="w-full min-h-[320px] sm:min-h-[360px] overflow-hidden relative">
      {/* Wide Horizontal Live Google Reviews Widget */}
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/25705725"
        className="w-full h-full min-h-[320px] sm:min-h-[360px] border-0 bg-transparent"
        title="Live Google Reviews - Fly Creative Solutions"
        loading="lazy"
      />
    </div>
  );
}
