import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check for saved theme preference or default to light mode
function getInitialTheme(): boolean {
	if (!browser) return false;
	
	const saved = localStorage.getItem('darkMode');
	if (saved !== null) {
		return JSON.parse(saved);
	}
	
	// Check system preference
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Create the dark mode store
export const isDarkMode = writable<boolean>(getInitialTheme());

// Function to toggle dark mode
export function toggleDarkMode() {
	isDarkMode.update(current => {
		const newValue = !current;
		if (browser) {
			localStorage.setItem('darkMode', JSON.stringify(newValue));
			document.documentElement.classList.toggle('dark', newValue);
		}
		return newValue;
	});
}

// Function to set dark mode
export function setDarkMode(value: boolean) {
	isDarkMode.set(value);
	if (browser) {
		localStorage.setItem('darkMode', JSON.stringify(value));
		document.documentElement.classList.toggle('dark', value);
	}
}

// Initialize theme on store creation
if (browser) {
	isDarkMode.subscribe(value => {
		document.documentElement.classList.toggle('dark', value);
	});
}
