// FitQuests Color Palette - Mountain Inspired
const COLORS = {
  // Main palette from the image
  DEEP_PURPLE: '#200432',      // Deep purple - mountain background
  DARK_PURPLE: '#4A0730',      // Dark purple - shadows
  WINE_RED: '#7A0C31',         // Wine red - deep forests
  BRIGHT_RED: '#CD1A30',       // Bright red - dynamic accents
  VIBRANT_ORANGE: '#FE8932',   // Vibrant orange - energy and motivation
  CREAM: '#FEE7B5',            // Cream - clarity and readability
  
  // Derived colors for interface
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY_LIGHT: '#F5F5F5',
  GRAY_MEDIUM: '#CCCCCC',
  GRAY_DARK: '#666666',
} as const;

const tintColorLight = COLORS.BRIGHT_RED;
const tintColorDark = COLORS.VIBRANT_ORANGE;

export default {
  light: {
    // Text and main elements
    text: COLORS.DEEP_PURPLE,
    textSecondary: COLORS.DARK_PURPLE,
    background: COLORS.WHITE,
    surface: COLORS.GRAY_LIGHT,
    
    // Brand colors
    primary: COLORS.BRIGHT_RED,
    secondary: COLORS.VIBRANT_ORANGE,
    accent: COLORS.WINE_RED,
    
    // Navigation and interaction
    tint: tintColorLight,
    tabIconDefault: COLORS.GRAY_MEDIUM,
    tabIconSelected: tintColorLight,
    
    // States and feedback
    success: COLORS.VIBRANT_ORANGE,
    warning: COLORS.VIBRANT_ORANGE,
    error: COLORS.BRIGHT_RED,
    
    // Interface elements
    border: COLORS.GRAY_MEDIUM,
    card: COLORS.WHITE,
    notification: COLORS.CREAM,
  },
  dark: {
    // Text and main elements
    text: COLORS.CREAM,
    textSecondary: COLORS.WHITE,
    background: COLORS.DEEP_PURPLE,
    surface: COLORS.DARK_PURPLE,
    
    // Brand colors
    primary: COLORS.VIBRANT_ORANGE,
    secondary: COLORS.BRIGHT_RED,
    accent: COLORS.WINE_RED,
    
    // Navigation and interaction
    tint: tintColorDark,
    tabIconDefault: COLORS.GRAY_MEDIUM,
    tabIconSelected: tintColorDark,
    
    // States and feedback
    success: COLORS.VIBRANT_ORANGE,
    warning: COLORS.VIBRANT_ORANGE,
    error: COLORS.BRIGHT_RED,
    
    // Interface elements
    border: COLORS.WINE_RED,
    card: COLORS.DARK_PURPLE,
    notification: COLORS.WINE_RED,
  },
};

// Export raw colors for direct usage
export { COLORS };
