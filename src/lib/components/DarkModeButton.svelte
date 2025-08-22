<script lang="ts">
	import { isDarkMode, toggleDarkMode } from '$lib/stores/darkMode';
</script>

<div class="dark-mode-button">
	<button 
		class="dark-mode-toggle" 
		on:click={toggleDarkMode} 
		title={$isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
		aria-label={$isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
		aria-pressed={$isDarkMode}
		type="button"
	>
		<span class="icon" aria-hidden="true">
			{#if $isDarkMode}
				☀️
			{:else}
				🌙
			{/if}
		</span>
	</button>
</div>

<style>
	/* Import Inter font for consistency */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	.dark-mode-button {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 1002;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.dark-mode-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		font-family: 'Inter', sans-serif;
	}

	.dark-mode-toggle:hover {
		background: rgba(255, 255, 255, 0.98);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
		transform: translateY(-1px);
	}

	.icon {
		font-size: 18px;
		transition: transform 0.3s ease;
	}

	.dark-mode-toggle:hover .icon {
		transform: scale(1.1);
	}

	/* Focus styles for accessibility */
	.dark-mode-toggle:focus {
		outline: 2px solid #007bff;
		outline-offset: 2px;
	}

	:global(.dark) .dark-mode-toggle:focus {
		outline: 2px solid #007bff;
		outline-offset: 2px;
	}

	/* Dark mode styles */
	:global(.dark) .dark-mode-toggle {
		background: rgba(60, 60, 60, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
	}

	:global(.dark) .dark-mode-toggle:hover {
		background: rgba(80, 80, 80, 0.98);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.dark-mode-button {
			top: 16px;
			right: 16px;
		}

		.dark-mode-toggle {
			width: 40px;
			height: 40px;
		}

		.icon {
			font-size: 16px;
		}
	}

	/* Hide in print */
	@media print {
		.dark-mode-button {
			display: none;
		}
	}
</style>
