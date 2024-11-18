import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaaBold: ["var(--font-comfortaa-bold)"],
        comfortaaLight: ["var(--font-comfortaa-light)"],
        comfortaaMedium: ["var(--font-comfortaa-Medium)"],
        comfortaaRegular: ["var(--font-comfortaa-regular)"],
        comfortaaSemiBold: ["var(--font-comfortaa-semibold)"],
        eagleLake: ["var(--font-eagle-lake)"],
        gruppo: ["var(--font-gruppo)"],
        kaushanScript: ["var(--font-kaushan-script)"],
        pacifico: ["var(--font-pacifico)"],
        reenieBeanie: ["var(--font-reenie-beanie)"],
        sacramento: ["var(--font-sacramento)"],
        sail: ["var(--font-sail)"],
        jostSemiBold: ["var(--font-jost-semibold)"],
        karla: ["var(--font-karla)"],
        ephesis: ["var(--font-ephesis)"],
      },
      fontSize: {
        "px-2": "0.125rem",
        "px-4": "0.25rem",
        "px-6": "0.375rem",
        "px-8": "0.5rem",
        "px-10": "0.625rem",
        "px-12": "0.75rem",
        "px-14": "0.875rem",
        "px-16": "1rem",
        "px-18": "1.125rem",
        "px-20": "1.25rem",
        "px-22": "1.375rem",
        "px-24": "1.5rem",
        "px-26": "1.625rem",
        "px-28": "1.75rem",
        "px-30": "1.875rem",
        "px-32": "2rem",
        "px-34": "2.125rem",
        "px-36": "2.25rem",
        "px-38": "2.375rem",
        "px-40": "2.5rem",
        "px-42": "2.625rem",
        "px-44": "2.75rem",
        "px-46": "2.875rem",
        "px-48": "3rem",
        "px-50": "3.125rem",
        "px-52": "3.25rem",
        "px-54": "3.375rem",
        "px-56": "3.5rem",
        "px-58": "3.625rem",
        "px-60": "3.75rem",
        "px-62": "3.875rem",
        "px-64": "4rem",
        "px-66": "4.125rem",
        "px-68": "4.25rem",
        "px-70": "4.375rem",
        "px-72": "4.5rem",
        "px-74": "4.625rem",
        "px-76": "4.75rem",
        "px-78": "4.875rem",
        "px-80": "5rem",
        "px-82": "5.125rem",
        "px-84": "5.25rem",
        "px-86": "5.375rem",
        "px-88": "5.5rem",
        "px-90": "5.625rem",
        "px-92": "5.75rem",
        "px-94": "5.875rem",
        "px-96": "6rem",
        "px-98": "6.125rem",
        "px-100": "6.25rem",
      },
      colors: {
        textgreen: "#3C552D",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        lightBrownBg: "rgb(59 21 2)",
        darkBrownBg: "rgb(29 7 1)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backdropBlur: {
        sm: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
