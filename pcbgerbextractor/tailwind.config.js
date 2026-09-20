/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          subtle: '#F7F7F5',
          card: '#FFFFFF',
          sidebar: '#FAFAFA'
        },
        txt: {
          primary: '#171717',
          secondary: '#6B6B6B',
          muted: '#9CA3AF'
        },
        border: {
          subtle: '#E5E5E5',
          strong: '#D4D4D4'
        },
        brand: {
          DEFAULT: '#4F46E5', // Deep indigo
          hover: '#4338CA',
          light: '#EEF2FF',
          dark: '#3730A3'
        },
        status: {
          success: '#16A34A',
          'success-bg': '#F0FDF4',
          'success-border': '#DCFCE7',
          warning: '#D97706',
          'warning-bg': '#FFFBEB',
          'warning-border': '#FEF3C7',
          error: '#DC2626',
          'error-bg': '#FEF2F2',
          'error-border': '#FEE2E2',
          info: '#2563EB',
          'info-bg': '#EFF6FF',
          'info-border': '#DBEAFE'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        'panel': '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'dropdown': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
}

