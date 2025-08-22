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
		position: relative;
		display: flex;
		align-items: center;
		gap: 8px;
		background: var(--background-primary);
		backdrop-filter: blur(10px);
		border: 1px solid var(--border-color);
		border-radius: 25px;
		padding: 8px 16px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 14px;
		font-weight: 500;
		box-shadow: var(--shadow-sm);
	}

	.language-toggle:hover {
		background: var(--background-primary-hover);
		box-shadow: var(--shadow-md);
		transform: translateY(-1px);
	}

	.language-toggle:focus {
		outline: 2px solid var(--focus-outline-color);
		outline-offset: 2px;
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
		background: var(--background-primary);
		backdrop-filter: blur(10px);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		min-width: 160px;
		animation: slideDown 0.2s ease;
		list-style: none;
		padding: 0;
		margin: 8px 0 0 0;
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
		gap: 8px;
		padding: 12px 16px;
		background: none;
		border: none;
		color: var(--text-primary);
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 14px;
		width: 100%;
		text-align: left;
	}

	.language-option:hover {
		background-color: var(--background-accent);
	}

	.language-option:focus {
		outline: 2px solid var(--focus-outline-color);
		outline-offset: -2px;
		background-color: var(--background-accent);
	}

	.language-option.active {
		background-color: var(--background-accent);
		color: var(--primary-color);
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
		background: var(--background-primary);
		border: 1px solid var(--border-color);
		color: var(--text-primary);
		box-shadow: var(--shadow-sm);
	}

	:global(.dark) .language-toggle:hover {
		background: var(--background-primary-hover);
		box-shadow: var(--shadow-md);
	}

	:global(.dark) .language-toggle:focus {
		outline: 2px solid var(--focus-outline-color);
		outline-offset: 2px;
	}

	:global(.dark) .current-lang {
		color: var(--text-secondary);
	}

	:global(.dark) .arrow {
		color: var(--text-muted);
	}

	:global(.dark) .language-dropdown {
		background: var(--background-primary);
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow-lg);
	}

	:global(.dark) .language-option {
		color: var(--text-primary);
	}

	:global(.dark) .language-option:hover {
		background-color: var(--background-accent);
	}

	:global(.dark) .language-option:focus {
		outline: 2px solid var(--focus-outline-color);
		outline-offset: -2px;
		background-color: var(--background-accent);
	}

	:global(.dark) .language-option.active {
		background-color: var(--background-accent);
		color: var(--primary-color);
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