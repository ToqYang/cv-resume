<script lang="ts">
	import { designSystem } from '$lib/stores/designSystem';
	import { currentLanguage, setLanguage, type Language } from '$lib/stores/translations';
	
	let isOpen = false;
	
	const languages = [
		{ code: 'EN', name: 'English', flag: '🇺🇸' },
		{ code: 'ES', name: 'Español', flag: '🇪🇸' }
	];
	
	function toggleLanguageMenu() {
		isOpen = !isOpen;
	}
	
	function selectLanguage(lang: { code: string; name: string; flag: string }) {
		setLanguage(lang.code as Language);
		isOpen = false;
	}
	
	function handleClickOutside(event: MouseEvent) {
		if (!(event.target as Element).closest('.language-button')) {
			isOpen = false;
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<div class="language-button">
	<button 
		class="language-toggle" 
		on:click={toggleLanguageMenu}
		aria-label="Select language"
		aria-expanded={isOpen}
		aria-haspopup="menu"
		type="button"
	>
		<span class="current-flag">
			{languages.find(lang => lang.code === $currentLanguage)?.flag || '🌐'}
		</span>
		<span class="current-lang">{$currentLanguage}</span>
		<span class="arrow" class:rotated={isOpen} aria-hidden="true">▼</span>
	</button>
	
	{#if isOpen}
		<ul class="language-dropdown" role="menu" aria-label="Language options">
			{#each languages as language}
				<li role="none">
					<button 
						class="language-option" 
						class:active={language.code === $currentLanguage}
						on:click={() => selectLanguage(language)}
						role="menuitem"
						type="button"
					>
						<span class="flag">{language.flag}</span>
						<span class="name">{language.name}</span>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	/* Import Inter font for consistency */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	.language-button {
		position: fixed;
		top: 76px;
		right: 20px;
		z-index: 1001;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.language-toggle {
		display: flex;
		align-items: center;
		gap: 8px;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 25px;
		padding: 8px 16px;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		font-size: 14px;
	}

	.language-toggle:hover {
		background: rgba(255, 255, 255, 0.98);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
		transform: translateY(-1px);
	}

	.current-flag {
		font-size: 16px;
	}

	.current-lang {
		color: var(--text-secondary);
		font-weight: 500;
	}

	.arrow {
		font-size: 14px;
		transition: transform 0.3s ease;
		color: var(--text-muted);
	}

	.arrow.rotated {
		transform: rotate(180deg);
	}

	.language-dropdown {
		position: absolute;
		top: 100%;
		right: 0;
		margin-top: 8px;
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
		overflow: hidden;
		min-width: 160px;
		animation: slideDown 0.2s ease;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.language-option {
		display: flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		padding: 12px 16px;
		border: none;
		background: none;
		cursor: pointer;
		transition: background-color 0.2s ease;
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		color: #333;
	}

	.language-option:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.language-option:focus {
		outline: 2px solid #007bff;
		outline-offset: -2px;
		background-color: var(--background-accent);
	}

	.language-option.active {
		background-color: var(--background-accent);
		color: #007bff;
		font-weight: 500;
	}

	.flag {
		font-size: 16px;
	}

	.name {
		font-weight: 500;
	}

	/* Dark mode styles */
	:global(.dark) .language-toggle {
		background: rgba(60, 60, 60, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #e0e0e0;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
	}

	:global(.dark) .language-toggle:hover {
		background: rgba(80, 80, 80, 0.98);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
	}

	:global(.dark) .current-lang {
		color: var(--text-secondary);
	}

	:global(.dark) .arrow {
		color: var(--text-muted);
	}

	:global(.dark) .language-dropdown {
		background: rgba(60, 60, 60, 0.98);
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
	}

	:global(.dark) .language-option {
		color: #e0e0e0;
	}

	:global(.dark) .language-option:hover {
		background-color: rgba(255, 255, 255, 0.15);
	}

	:global(.dark) .language-option:focus {
		outline: 2px solid #007bff;
		outline-offset: -2px;
		background-color: var(--background-accent);
	}

	:global(.dark) .language-option.active {
		background-color: var(--background-accent);
		color: #007bff;
		font-weight: 500;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.language-button {
			top: 68px;
			right: 16px;
		}

		.language-toggle {
			padding: 6px 12px;
			font-size: 12px;
		}

		.current-flag {
			font-size: 14px;
		}

		.language-dropdown {
			min-width: 140px;
		}

		.language-option {
			padding: 10px 12px;
			font-size: 12px;
		}
	}

	/* Hide in print */
	@media print {
		.language-button {
			display: none;
		}
	}
</style> 