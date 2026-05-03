import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				md: '3rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
	fontFamily: {
		sans: ['Outfit', 'system-ui', 'sans-serif'],
			serif: ['Outfit', 'system-ui', 'sans-serif'],
			syne: ['Outfit', 'sans-serif'],
			'space-grotesk': ['Outfit', 'sans-serif'],
		},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				section: 'hsl(var(--section))',
				hint: 'hsl(var(--hint))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					tint: 'hsl(var(--accent-tint))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				surface: {
					1: 'hsl(var(--surface-1))',
					2: 'hsl(var(--surface-2))',
					3: 'hsl(var(--surface-3))',
					4: 'hsl(var(--surface-4))',
					5: 'hsl(var(--surface-5))',
					6: 'hsl(var(--surface-6))',
				},
				/* Legacy brand tokens remapped to new palette so existing
				   bg-brand-* classes resolve to neutral + accent surfaces */
				brand: {
					foam: '#F5F2EE',     /* page bg */
					caramel: '#E0DAD1',  /* card surface (was warm cream tag) */
					matcha: '#4F6A80',   /* accent (was olive) */
					chai: '#1C1410',     /* primary text (was deep brown-red) */
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'wiggle': {
					'0%, 100%': {
						transform: 'rotateY(0deg)'
					},
					'25%': {
						transform: 'rotateY(-8deg)'
					},
					'75%': {
						transform: 'rotateY(8deg)'
					}
				},
				'expand-width': {
					'0%': {
						transform: 'scaleX(0)',
						transformOrigin: 'left'
					},
					'100%': {
						transform: 'scaleX(1)',
						transformOrigin: 'left'
					}
				},
			'marquee': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				},
			'pulse-ring': {
					'0%': {
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(2)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '0'
					}
				},
				'collapsible-down': {
					from: {
						height: '0',
						opacity: '0'
					},
					to: {
						height: 'var(--radix-collapsible-content-height)',
						opacity: '1'
					}
				},
			'collapsible-up': {
					from: {
						height: 'var(--radix-collapsible-content-height)',
						opacity: '1'
					},
					to: {
						height: '0',
						opacity: '0'
					}
				},
			'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
			'cursor-pulse': {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(0.7)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'page-enter': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pop-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.85)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'drift-1': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
					'25%': { transform: 'translate(12px, -10px) rotate(2deg)' },
					'50%': { transform: 'translate(-8px, -16px) rotate(-3deg)' },
					'75%': { transform: 'translate(-14px, 6px) rotate(1deg)' }
				},
				'drift-2': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(2deg)' },
					'33%': { transform: 'translate(-14px, 12px) rotate(-2deg)' },
					'66%': { transform: 'translate(16px, 8px) rotate(3deg)' }
				},
				'drift-3': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'50%': { transform: 'translate(6px, -18px) rotate(-2deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'wiggle': 'wiggle 0.5s ease-in-out 2',
				'expand-width': 'expand-width 0.8s ease-out forwards',
			'marquee': 'marquee 20s linear infinite',
			'marquee-fast': 'marquee 10s linear infinite',
				'pulse-ring': 'pulse-ring 2s ease-out infinite',
				'collapsible-down': 'collapsible-down 0.2s ease-out',
				'collapsible-up': 'collapsible-up 0.2s ease-out',
				'slide-in-left': 'slide-in-left 0.4s ease-out forwards',
				'cursor-pulse': 'cursor-pulse 0.15s ease-out',
				'page-enter': 'page-enter 0.4s ease-out forwards',
				'pop-in': 'pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'drift-1': 'drift-1 7s ease-in-out infinite',
				'drift-2': 'drift-2 9s ease-in-out infinite',
				'drift-3': 'drift-3 6s ease-in-out infinite'
		}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
