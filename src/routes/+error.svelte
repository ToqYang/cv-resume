<script>
	import { page } from '$app/stores';
	import MetaTags from '$lib/components/SEO/MetaTags.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';

	$: status = $page.error?.status || 404;
	$: message = $page.error?.message || 'Page not found';
</script>

<MetaTags 
	title="Page Not Found - Toq Yang"
	description="The page you're looking for doesn't exist. Return to the homepage or explore other sections."
/>

<main class="error-page">
	<div class="container-main">
		<div class="error-content">
			<div class="error-image-container">
				<img 
					src="./error.jpg" 
					alt="Page not found" 
					class="error-image"
					draggable="false"
					loading="lazy"
				/>
			</div>
			<div class="error-code">{status}</div>
			<h1 class="error-title">Page Not Found</h1>
			
			<div class="error-message">
				{#if status === 404}
					<p>We couldn't find the page you were looking for. It might have been moved or deleted.</p>
				{:else}
					<p>{message}</p>
				{/if}
			</div>

			<div class="cta-buttons">
				<a href="/" class="btn btn-primary">
					← Back to Home
				</a>
				<a href="/contact" class="btn btn-secondary">
					Contact Me
				</a>
			</div>
		</div>
	</div>
</main>

<BottomNav />

<style>
	/* Error Image */
	.error-image-container {
		max-width: 300px;
		margin: 0 auto 2rem;
	}

	.error-image {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	/* Base styles */
	.error-page {
		padding: 4rem 0 6rem;
		min-height: 100vh;
		display: flex;
		align-items: center;
	}

	.container-main {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Error content */
	.error-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.error-code {
		font-size: 8rem;
		font-weight: 900;
		line-height: 1;
		color: var(--primary-color, #000);
		margin: 0 0 1rem;
		opacity: 0.1;
		position: relative;
	}

	.error-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary, #1a1a1a);
		margin: 0 0 1.5rem;
		line-height: 1.2;
	}

	.error-message {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--text-secondary, #666);
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Buttons */
	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-bottom: 4rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem 1.75rem;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
		font-size: 0.95rem;
		line-height: 1.3;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
		letter-spacing: -0.01em;
	}

	.btn-primary {
		background-color: var(--primary-color, #000);
		color: #fff;
	}

	.btn-primary:hover {
		background-color: var(--primary-dark, #333);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.btn-secondary {
		background-color: #fff;
		color: var(--primary-color, #000);
		border: 2px solid var(--primary-color, #000);
	}

	.btn-secondary:hover {
		background-color: var(--primary-light, #f5f5f5);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}



	/* Responsive styles */
	@media (max-width: 768px) {
		.error-page {
			padding: 3rem 0 5rem;
		}

		.error-code {
			font-size: 6rem;
		}

		.error-title {
			font-size: 2rem;
		}

		.error-message {
			font-size: 1.125rem;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			width: 100%;
			max-width: 280px;
		}

		.link-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 480px) {
		.error-code {
			font-size: 5rem;
		}

		.error-title {
			font-size: 1.75rem;
		}

		.link-grid {
			grid-template-columns: 1fr;
		}

		.quick-link {
			padding: 1.25rem 1rem;
		}

		.quick-link svg {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
