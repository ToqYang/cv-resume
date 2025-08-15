import { writable } from 'svelte/store';

// Type definitions
interface Colors {
	primary: string;
	primaryDark: string;
	primaryLight: string;
	gray1: string;
	gray2: string;
	black: string;
	white: string;
	text: {
		primary: string;
		secondary: string;
		muted: string;
	};
	background: {
		primary: string;
		secondary: string;
		accent: string;
	};
	border: {
		primary: string;
		secondary: string;
	};
}

interface Typography {
	fontFamily: {
		primary: string;
		monospace: string;
	};
	fontSize: {
		h1: string;
		h2: string;
		h3: string;
		h4: string;
		h5: string;
		h6: string;
		lead: string;
		body: string;
		small: string;
	};
	fontWeight: {
		light: number;
		normal: number;
		medium: number;
		semibold: number;
		bold: number;
	};
	lineHeight: {
		tight: number;
		normal: number;
		relaxed: number;
	};
}

interface Spacing {
	xs: string;
	sm: string;
	md: string;
	lg: string;
	xl: string;
	xxl: string;
}

interface BorderRadius {
	sm: string;
	md: string;
	lg: string;
	xl: string;
	pill: string;
}

interface Shadows {
	sm: string;
	md: string;
	lg: string;
}

interface DesignSystem {
	colors: Colors;
	typography: Typography;
	spacing: Spacing;
	borderRadius: BorderRadius;
	shadows: Shadows;
}

// Design system configuration
const defaultDesignSystem: DesignSystem = {
	colors: {
		primary: '#007bff', // Blue primary color
		primaryDark: '#0056b3',
		primaryLight: '#3391ff',
		gray1: '#D9D9D9',
		gray2: '#EEEEEE',
		black: '#000000',
		white: '#FFFFFF',
		text: {
			primary: '#000000',
			secondary: '#666666',
			muted: '#999999'
		},
		background: {
			primary: '#FFFFFF',
			secondary: '#f8f9fa',
			accent: '#f0f0f0'
		},
		border: {
			primary: '#e9ecef',
			secondary: '#dee2e6'
		}
	},
	typography: {
		fontFamily: {
			primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
			monospace: 'Courier New, monospace'
		},
		fontSize: {
			h1: '3.5rem',
			h2: '2.5rem',
			h3: '2rem',
			h4: '1.25rem',
			h5: '1.125rem',
			h6: '1rem',
			lead: '1.125rem',
			body: '1rem',
			small: '0.875rem'
		},
		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700
		},
		lineHeight: {
			tight: 1.2,
			normal: 1.4,
			relaxed: 1.6
		}
	},
	spacing: {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem',
		xxl: '3rem'
	},
	borderRadius: {
		sm: '4px',
		md: '8px',
		lg: '12px',
		xl: '16px',
		pill: '50px'
	},
	shadows: {
		sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
		md: '0 4px 12px rgba(0, 0, 0, 0.1)',
		lg: '0 8px 32px rgba(0, 0, 0, 0.15)'
	}
};

// Create the writable store
export const designSystem = writable<DesignSystem>(defaultDesignSystem);

// Helper functions to update design system
export const updateColors = (colors: Partial<Colors>) => {
	designSystem.update(system => ({
		...system,
		colors: { ...system.colors, ...colors }
	}));
};

export const updateTypography = (typography: Partial<Typography>) => {
	designSystem.update(system => ({
		...system,
		typography: { ...system.typography, ...typography }
	}));
};

export const updateSpacing = (spacing: Partial<Spacing>) => {
	designSystem.update(system => ({
		...system,
		spacing: { ...system.spacing, ...spacing }
	}));
};

// Export the default data for reference
export { defaultDesignSystem };
export type { DesignSystem, Colors, Typography, Spacing, BorderRadius, Shadows };
