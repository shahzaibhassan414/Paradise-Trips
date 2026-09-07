/**
 * =====================================================================
 * 🎨 CENTRAL THEME & COLOR SYSTEM FOR PARADISE TRIPS & TOURS
 * =====================================================================
 * 
 * To change the website's entire color palette:
 * 1. Choose any of the pre-configured THEME PRESETS below, OR
 * 2. Edit the custom HEX codes in `activeColors`.
 * 
 * Everything (buttons, cards, stars, badges, gradients, glowing effects,
 * pills, form focus rings, headers, footers) will automatically update!
 * =====================================================================
 */

export interface ColorPalette {
  name: string;
  primary: {
    DEFAULT: string;       // Main CTA buttons, active tabs, primary icons
    hover: string;         // Hover state for primary buttons
    light: string;         // Soft background for category tags and active selections
    dark: string;          // Deep tone for text inside light tags
    gradientTo: string;    // Gradient end color for dynamic buttons & headlines
  };
  accent: {
    DEFAULT: string;       // Rating stars, promo badges, glowing sparks, highlights
    hover: string;         // Accent hover
    light: string;         // Soft accent background
    dark: string;          // Dark accent text
    gradientTo: string;    // Accent gradient end (e.g. for badges)
  };
  dark: {
    bg: string;            // Deepest dark background (Hero & Footer)
    surface: string;       // Elevated dark cards, modal headers, navigation bar
    border: string;        // Dark border lines
    text: string;          // Headings on dark backgrounds
    muted: string;         // Secondary text on dark backgrounds
  };
  light: {
    bg: string;            // Main page background
    card: string;          // White cards and modals
    border: string;        // Light borders and input outlines
    text: string;          // Main headings and title text
    muted: string;         // Subtitles and body text
  };
}

/**
 * 🌟 READY-TO-USE THEME PRESETS
 * You can switch the website look anytime by changing `activeThemeKey`!
 */
export const themePresets: Record<string, ColorPalette> = {
  // Preset 1: Official Logo Palette (Navy Blue #17244e, Mountain Teal #14958f / #73b5ab, Sunrise Orange #ff9f49)
  logoBrand: {
    name: "Official Logo Brand (Teal Aqua, Sunrise Amber & Deep Navy)",
    primary: {
      DEFAULT: "#0f766e",      // Rich Mountain Teal
      hover: "#115e59",
      light: "#f0fdfa",
      dark: "#134e4a",
      gradientTo: "#0284c7",   // Gradient into fresh sky
    },
    accent: {
      DEFAULT: "#ff9f49",      // Exact Logo Sun Orange
      hover: "#f97316",
      light: "#fff7ed",
      dark: "#9a3412",
      gradientTo: "#f59e0b",   // Warm Gold
    },
    dark: {
      bg: "#0b1224",            // Midnight Deep Navy
      surface: "#17244e",       // Exact Logo Navy Badge
      border: "#263868",
      text: "#f8fafc",
      muted: "#94a3b8",
    },
    light: {
      bg: "#f8fafc",
      card: "#ffffff",
      border: "#e2e8f0",
      text: "#0f172a",
      muted: "#64748b",
    },
  },

  // Preset 2: Ocean Azure & Sunset Gold
  ocean: {
    name: "Paradise Ocean Azure & Sunset Gold",
    primary: {
      DEFAULT: "#0284c7",      // Sky / Ocean Blue
      hover: "#0369a1",
      light: "#f0f9ff",
      dark: "#0c4a6e",
      gradientTo: "#0891b2",   // Cyan
    },
    accent: {
      DEFAULT: "#f59e0b",      // Amber / Gold
      hover: "#d97706",
      light: "#fef3c7",
      dark: "#78350f",
      gradientTo: "#ea580c",   // Warm orange
    },
    dark: {
      bg: "#090d16",
      surface: "#0f172a",
      border: "#1e293b",
      text: "#f8fafc",
      muted: "#94a3b8",
    },
    light: {
      bg: "#f8fafc",
      card: "#ffffff",
      border: "#e2e8f0",
      text: "#0f172a",
      muted: "#64748b",
    },
  },

  // Preset 2: Alpine Emerald & Goldenrod (Mountain Forest Theme)
  emerald: {
    name: "Alpine Emerald & Goldenrod",
    primary: {
      DEFAULT: "#059669",      // Emerald Green
      hover: "#047857",
      light: "#ecfdf5",
      dark: "#064e3b",
      gradientTo: "#0d9488",   // Teal
    },
    accent: {
      DEFAULT: "#eab308",      // Gold
      hover: "#ca8a04",
      light: "#fef9c3",
      dark: "#713f12",
      gradientTo: "#f59e0b",
    },
    dark: {
      bg: "#05130e",
      surface: "#0b2019",
      border: "#13382c",
      text: "#f0fdf4",
      muted: "#86efac",
    },
    light: {
      bg: "#f8fafc",
      card: "#ffffff",
      border: "#e2e8f0",
      text: "#0f172a",
      muted: "#64748b",
    },
  },

  // Preset 3: Royal Sapphire & Coral (Luxury Coastal / Modern Elite Theme)
  sapphire: {
    name: "Royal Sapphire & Coral",
    primary: {
      DEFAULT: "#2563eb",      // Royal Blue
      hover: "#1d4ed8",
      light: "#eff6ff",
      dark: "#1e3a8a",
      gradientTo: "#4f46e5",   // Indigo
    },
    accent: {
      DEFAULT: "#f43f5e",      // Coral Rose
      hover: "#e11d48",
      light: "#ffe4e6",
      dark: "#881337",
      gradientTo: "#fb7185",
    },
    dark: {
      bg: "#080d1a",
      surface: "#0f172a",
      border: "#1e293b",
      text: "#f8fafc",
      muted: "#94a3b8",
    },
    light: {
      bg: "#f8fafc",
      card: "#ffffff",
      border: "#e2e8f0",
      text: "#0f172a",
      muted: "#64748b",
    },
  },

  // Preset 4: Imperial Gold & Midnight Onyx (Ultra Luxury Heritage Theme)
  imperialGold: {
    name: "Imperial Gold & Midnight Onyx",
    primary: {
      DEFAULT: "#d97706",      // Amber Gold
      hover: "#b45309",
      light: "#fffbeb",
      dark: "#78350f",
      gradientTo: "#ca8a04",
    },
    accent: {
      DEFAULT: "#0284c7",      // Azure Blue
      hover: "#0369a1",
      light: "#f0f9ff",
      dark: "#0c4a6e",
      gradientTo: "#0ea5e9",
    },
    dark: {
      bg: "#0a0a0c",
      surface: "#141419",
      border: "#26262e",
      text: "#fafafa",
      muted: "#a1a1aa",
    },
    light: {
      bg: "#fafaf9",
      card: "#ffffff",
      border: "#e7e5e4",
      text: "#1c1917",
      muted: "#78716c",
    },
  },

  // Preset 5: Karakoram Sunset Crimson & Amber
  crimson: {
    name: "Karakoram Sunset Crimson & Amber",
    primary: {
      DEFAULT: "#e11d48",      // Crimson Rose
      hover: "#be123c",
      light: "#fff1f2",
      dark: "#881337",
      gradientTo: "#f97316",   // Sunset Orange
    },
    accent: {
      DEFAULT: "#f59e0b",      // Amber
      hover: "#d97706",
      light: "#fef3c7",
      dark: "#78350f",
      gradientTo: "#fbbf24",
    },
    dark: {
      bg: "#12080a",
      surface: "#1c0f13",
      border: "#331920",
      text: "#fff1f2",
      muted: "#fda4af",
    },
    light: {
      bg: "#fffbfb",
      card: "#ffffff",
      border: "#fecdd3",
      text: "#1f1215",
      muted: "#88636b",
    },
  },
};

/**
 * 🎯 CHANGE ACTIVE THEME HERE:
 * Simply change the key below to "logoBrand", "ocean", "emerald", "sapphire", "imperialGold", or "crimson"!
 */
export const activeThemeKey: keyof typeof themePresets = "logoBrand";

export const activeTheme: ColorPalette = themePresets[activeThemeKey];
