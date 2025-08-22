<script lang="ts">
	import { base } from '$app/paths';
	import { currentLanguage } from '$lib/stores/translations';
	
	export let currentPage = '/';
	
	// Reactive navigation labels based on current language
	$: navLabels = $currentLanguage === 'ES' ? {
		cv: 'CV',
		cover: 'CL',
		systemDesign: 'Diseño de Sistemas',
		blog: 'Blog',
		contact: 'Contacto'
	} : {
		cv: 'CV',
		cover: 'CL',
		systemDesign: 'System Design',
		blog: 'Blog',
		contact: 'Contact'
	};
</script>

<div class="floating-nav no-print">
	<div class="nav-container">
		<nav class="nav-menu">
			<a href="{base}/" class="nav-item">
				<img src="{base}/photo_profile.jpeg" loading="lazy" alt="Profile" class="nav-avatar">
			</a>
					<a href="{base}/about" class="nav-link" class:active={currentPage === '/about'}>{navLabels.cv}</a>
		<a href="{base}/cover-letter" class="nav-link" class:active={currentPage === '/cover-letter'}>{navLabels.cover}</a>
		<a href="{base}/system-design" class="nav-link" class:active={currentPage === '/system-design'}>{navLabels.systemDesign}</a>
		<a href="{base}/blog" class="nav-link" class:active={currentPage === '/blog'}>{navLabels.blog}</a>
		<a href="{base}/contact" class="nav-link" class:active={currentPage === '/contact'}>{navLabels.contact}</a>
		</nav>
	</div>
</div>

<style>
	/* Import Inter font for consistency */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	.floating-nav {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-radius: 50px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		z-index: 1000;
		padding: 8px;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
	}

	:global(.dark) .floating-nav {
		background: rgba(30, 30, 30, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.nav-container {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 0 8px;
	}

	.nav-menu {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.nav-item {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	.nav-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid rgba(255, 255, 255, 0.8);
		transition: border-color 0.3s ease;
	}

	:global(.dark) .nav-avatar {
		border: 2px solid rgba(255, 255, 255, 0.3);
	}

	.nav-link {
		text-decoration: none;
		color: #333;
		font-weight: 500;
		font-size: 14px;
		padding: 8px 16px;
		border-radius: 25px;
		transition: all 0.3s ease;
		white-space: nowrap;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	:global(.dark) .nav-link {
		color: #e0e0e0;
	}

	.nav-link:hover {
		background: rgba(0, 0, 0, 0.05);
		color: #000;
	}

	:global(.dark) .nav-link:hover {
		background: rgba(255, 255, 255, 0.1);
		color: #ffffff;
	}

	.nav-link.active {
		background: #007bff;
		color: white;
		box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
	}

	:global(.dark) .nav-link.active {
		background: #4da6ff;
		color: #000000;
		box-shadow: 0 2px 8px rgba(77, 166, 255, 0.4);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.floating-nav {
			bottom: 16px;
			padding: 6px;
		}

		.nav-container {
			gap: 12px;
			padding: 0 6px;
		}

		.nav-menu {
			gap: 16px;
		}

		.nav-avatar {
			width: 32px;
			height: 32px;
		}

		.nav-link {
			font-size: 12px;
			padding: 6px 12px;
		}
	}

	@media (max-width: 480px) {
		.nav-menu {
			gap: 8px;
		}

		.nav-link {
			font-size: 11px;
			padding: 4px 8px;
		}
	}
</style> 