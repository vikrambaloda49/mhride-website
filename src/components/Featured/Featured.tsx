"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface FeaturedProps {
  message: string;
  linkText?: string;
  linkUrl?: string;
  theme?: "light" | "dark" | "custom";
  customColors?: {
    background?: string;
    text?: string;
    accent?: string;
  };
  headerHeight?: number; // allow customizing offset
}

const Featured: React.FC<FeaturedProps> = ({
  message = "🔥 Downlaod the App Now for Exclusive Offers",
  linkText,
  linkUrl,
  theme = "light",
  customColors = {},
  headerHeight = 64, // default header height
}) => {
  const [visible, setVisible] = useState(true);

  // Theme styles (same pattern as FAQ)
  const themes = {
    light: {
      background: "bg-red-600",
      text: "text-white",
      accent: "hover:underline",
    },
    dark: {
      background: "bg-gray-800",
      text: "text-gray-100",
      accent: "hover:underline",
    },
    custom: {
      background: customColors.background || "bg-blue-600",
      text: customColors.text || "text-white",
      accent: customColors.accent || "hover:underline",
    },
  };

  const currentTheme = themes[theme];

  // Check sessionStorage for visibility
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDismissed = sessionStorage.getItem("featuredDismissed");
      if (isDismissed === "true") {
        setVisible(false);
      }
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("featuredDismissed", "true");
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed left-0 right-0 mt-6 z-50 ${currentTheme.background} shadow-md`}
      style={{ top: headerHeight }} // sits right below the header
    >
      <div className="max-w-full mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <p className={`text-sm sm:text-base font-medium ${currentTheme.text}`}>
          {message}{" "}
          {linkText && linkUrl && (
            <a
              href={linkUrl}
              className={`ml-2 font-semibold ${currentTheme.text} ${currentTheme.accent}`}
            >
              {linkText} →
            </a>
          )}
        </p>
        <button
          onClick={handleClose}
          aria-label="Close Featured Banner"
          className={`ml-4 flex-shrink-0 ${currentTheme.text} hover:opacity-75`}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Featured;
