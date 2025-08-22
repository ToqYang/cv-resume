<script>
	import { cvData } from '$lib/stores/cvData';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentLanguage } from '$lib/stores/translations';
	import { getContactConfig } from '$lib/config/contactConfig';
	
	// Reactive config based on current language
	$: config = $currentLanguage === 'ES' ? getContactConfig('ES') : getContactConfig('EN');
</script>

<svelte:head>
	<title>Contact - Santiago Toquica Yanguas</title>
	<meta name="description" content="Get in touch with Santiago Toquica Yanguas - Software Engineer" />
</svelte:head>

<div class="contact-container">
	<!-- Header -->
	<div class="container-medium">
		<div class="contact-header">
			<h1>{config.hero.title}</h1>
			<p>{config.hero.description}</p>
		</div>
	</div>

	{#if $cvData}
		<!-- Contact Information -->
		<div class="container-medium">
			<div class="contact-info">
				<div class="contact-card">
					<div class="contact-icon">📧</div>
					<h3>{config.links.email}</h3>
					<p>{$cvData.personal.email}</p>
					<a href="mailto:{$cvData.personal.email}" class="contact-link">{config.buttons.email}</a>
				</div>

				<div class="contact-card">
					<div class="contact-icon">📱</div>
					<h3>{config.links.phone}</h3>
					<p>{$cvData.personal.phone}</p>
					<div class="contact-actions">
						<a href="https://wa.me/{$cvData.personal.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="contact-link whatsapp">
							{config.buttons.whatsapp}
						</a>
						<a href="sms:{$cvData.personal.phone}" class="contact-link sms">
							{config.buttons.sms}
						</a>
					</div>
				</div>

				<div class="contact-card">
					<div class="contact-icon">📍</div>
					<h3>{config.links.location}</h3>
					<p>{config.labels.remote}</p>
					<span class="contact-note">{config.labels.availableForRemote}</span>
				</div>

				<div class="contact-card">
					<div class="contact-icon">💼</div>
					<h3>{config.links.linkedin}</h3>
					<p>{config.labels.professionalProfile}</p>
					<a href="{$cvData.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
						{config.buttons.linkedin}
					</a>
				</div>

				<div class="contact-card">
					<div class="contact-icon">🐙</div>
					<h3>{config.links.github}</h3>
					<p>{config.labels.codeRepository}</p>
					<a href="{$cvData.personal.github}" target="_blank" rel="noopener noreferrer" class="contact-link">
						{config.buttons.github}
					</a>
				</div>

				<div class="contact-card">
					<div class="contact-icon">📝</div>
					<h3>{config.links.technicalWriting}</h3>
					<p>{config.labels.articlesTutorials}</p>
					<a href="/blog" class="contact-link">{config.buttons.readArticles}</a>
				</div>

				<div class="contact-card">
					<div class="contact-icon">📚</div>
					<h3>{config.links.freeCodeCamp}</h3>
					<p>{config.labels.freeCodeCampProfile}</p>
					<a href="https://www.freecodecamp.org/espanol/news/author/toqyang/" target="_blank" rel="noopener noreferrer" class="contact-link">
						{config.buttons.visitFreeCodeCamp}
					</a>
				</div>

				<div class="contact-card">
					<div class="contact-icon">✍️</div>
					<h3>{config.links.medium}</h3>
					<p>{config.labels.mediumProfile}</p>
					<a href="https://medium.com/@ToqYang" target="_blank" rel="noopener noreferrer" class="contact-link">
						{config.buttons.visitMedium}
					</a>
				</div>
			</div>
		</div>
	{/if}

	<!-- Bottom Navigation -->
	<BottomNav currentPage="/contact" />
	<Footer />

	<style>
		/* Import Inter font for consistency */
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

		.contact-container {
			min-height: 100vh;
			background-color: #ffffff;
			font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		}

		.container-medium {
			max-width: 1050px;
			margin: 0 auto;
			padding: 0 2rem;
		}

	.contact-header {
		text-align: center;
		margin-bottom: var(--spacing-8);
		padding: var(--spacing-6);
		background-color: var(--background-accent);
		border-radius: var(--border-radius-lg);
	}

	.contact-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: var(--spacing-2);
	}

	.contact-header p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto;
	}

	.contact-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--spacing-6);
		margin-bottom: var(--spacing-8);
	}

	.contact-card {
		background-color: white;
		padding: var(--spacing-6);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-md);
		text-align: center;
		transition: all 0.3s ease;
		border: 1px solid var(--border-color);
	}

	.contact-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.contact-icon {
		font-size: 2.5rem;
		margin-bottom: var(--spacing-3);
	}

	.contact-card h3 {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: var(--spacing-2);
	}

	.contact-card p {
		color: var(--text-secondary);
		margin-bottom: var(--spacing-3);
		font-size: 1rem;
	}

	.contact-link {
		display: inline-block;
		background-color: var(--primary-color);
		color: white;
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: var(--border-radius);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.2s ease;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.contact-link:hover {
		background-color: #1e40af;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.contact-actions {
		display: flex;
		gap: var(--spacing-2);
		justify-content: center;
	}

	.contact-actions .contact-link {
		font-size: 0.8rem;
		padding: var(--spacing-1) var(--spacing-2);
	}

	.contact-link.whatsapp {
		background-color: #25D366;
		color: white;
	}

	.contact-link.whatsapp:hover {
		background-color: #128C7E;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.contact-link.sms {
		background-color: var(--primary-color);
		color: white;
	}

	.contact-link.sms:hover {
		background-color: #1e40af;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.contact-note {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-style: italic;
	}



	/* Responsive design */
	@media (max-width: 768px) {
		.contact-container {
			padding: var(--spacing-2);
		}

		.contact-header {
			padding: var(--spacing-4);
		}

		.contact-header h1 {
			font-size: 2rem;
		}

		.contact-info {
			grid-template-columns: 1fr;
			gap: var(--spacing-4);
		}

		.contact-card {
			padding: var(--spacing-4);
		}


	}
</style>
</div>