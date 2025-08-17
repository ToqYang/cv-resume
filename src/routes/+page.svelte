<script>
	import { base } from '$app/paths';
	import { cvData, getCVDataForLanguage } from '$lib/stores/cvData';
	import { designSystem } from '$lib/stores/designSystem';
	import { homeConfig, getConfig } from '../lib/config/homeConfig';
	import { currentLanguage } from '$lib/stores/translations';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import MetaTags from '$lib/components/SEO/MetaTags.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	// Reactive config based on current language
	$: config = $currentLanguage === 'ES' ? homeConfig.ES : homeConfig.EN;
	$: currentCVData = getCVDataForLanguage($currentLanguage);
</script>



<MetaTags 
	title="Santiago Toquica Yanguas - Software Engineer"
	description="Software Engineer specializing in Rails, React JS, Node JS, and TypeScript. Portfolio and CV showcasing projects and experience."
	keywords="Santiago Toquica Yanguas, Software Engineer, Rails, React JS, Node JS, TypeScript, Portfolio, CV, Resume"
	url="https://toqyang.com"
	type="website"
/>

<div class="container">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="container-medium">
			<div class="hero-content">
				<h1 class="heading-h1">{config.hero.title}</h1>
				<p class="text-lead">
					{currentCVData.personal.title}
				</p>
				<p class="text-paragraph">
					{currentCVData.summary}
				</p>
				<div class="hero-buttons">
					{#each config.hero.buttons as button}
						<a href="{base}{button.href}" class="button-{button.type}">
							{button.text}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="section-spacing">
		<div class="container-medium">
			<h2 class="heading-h2">{config.about.title}</h2>
			<p class="text-lead">
				{config.about.lead}
			</p>
			<p class="text-paragraph">
				{config.about.description}
			</p>
			<p class="text-small">
				{config.about.subDescription}
			</p>
			
			<!-- Skills Grid -->
			<div class="skills-grid">
				{#each config.skills as skill}
					<div class="skill-card">
						<span class="skill-icon">{skill.icon}</span>
						<div class="skill-content">
							<h3 class="heading-h4">{skill.title}</h3>
							<p class="text-paragraph">{skill.technologies}</p>
							<p class="text-small">{skill.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Bottom Navigation -->
	<BottomNav currentPage="/" />
	<Footer />
</div>

<style>
	/* Import Inter font */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	/* Container System */
	.container {
		min-height: 100vh;
		background-color: #ffffff;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.container-medium {
		max-width: 1050px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.container-small {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Section Spacing */
	.section-spacing {
		padding: 80px 0;
	}

	.section-spacing-bottom {
		padding-bottom: 80px;
	}

	/* Typography - Following Style Guide */
	.heading-h1 {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.2;
		color: #000000;
		margin-bottom: 1rem;
	}

	.heading-h2 {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.3;
		color: #000000;
		margin-bottom: 1.5rem;
	}

	.heading-h4 {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.4;
		color: #000000;
		margin-bottom: 0.5rem;
	}

	.text-lead {
		font-size: 1.125rem;
		line-height: 1.6;
		color: #666666;
		margin-bottom: 1.5rem;
	}

	.text-paragraph {
		font-size: 1rem;
		line-height: 1.6;
		color: #666666;
		margin-bottom: 1rem;
	}

	.text-small {
		font-size: 0.875rem;
		line-height: 1.5;
		color: #666666;
		margin-bottom: 0;
	}

	.text-center {
		text-align: center;
	}

	/* Hero Section */
	.hero-section {
		padding: 3rem 0 80px 0;
		background-color: #f8f9fa;
	}

	.hero-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
	}

	/* Buttons - Following Style Guide */
	.button-primary {
		background-color: #007bff;
		color: #ffffff;
		padding: 12px 24px;
		border: 2px solid #007bff;
		border-radius: 50px;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		display: inline-block;
		transition: all 0.3s ease;
		cursor: pointer;
		font-family: 'Inter', sans-serif;
	}

	.button-primary:hover {
		background-color: #ffffff;
		color: #007bff;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.button-secondary {
		background-color: #ffffff;
		color: #000000;
		padding: 12px 24px;
		border: 2px solid #000000;
		border-radius: 50px;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		display: inline-block;
		transition: all 0.3s ease;
		cursor: pointer;
		font-family: 'Inter', sans-serif;
	}

	.button-secondary:hover {
		background-color: #000000;
		color: #ffffff;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	/* Skills Grid */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.skill-card {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 2rem;
		background-color: #ffffff;
		border: 1px solid #e9ecef;
		border-radius: 12px;
		transition: all 0.3s ease;
	}

	.skill-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.skill-icon {
		font-size: 2.5rem;
		flex-shrink: 0;
	}

	.skill-content {
		flex: 1;
	}

	/* Footer */
	.footer {
		background-color: #f8f9fa;
		border-top: 1px solid #e9ecef;
		padding: 2rem 0 6rem 0;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.footer-links {
		display: flex;
		gap: 2rem;
	}

	.footer-link {
		color: #666666;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease;
		font-family: 'Inter', sans-serif;
	}

	.footer-link:hover {
		color: #000000;
	}

	.footer-text {
		color: #999999;
		font-size: 0.875rem;
		font-family: 'Inter', sans-serif;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.heading-h1 {
			font-size: 2.5rem;
		}

		.heading-h2 {
			font-size: 2rem;
		}

		.hero-section {
			padding: 80px 0 60px 0;
		}

		.section-spacing {
			padding: 60px 0;
		}

		.section-spacing-bottom {
			padding-bottom: 60px;
		}

		.hero-buttons {
			flex-direction: column;
			align-items: center;
		}

		.button-primary, .button-secondary {
			width: 100%;
			max-width: 300px;
			text-align: center;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.footer-content {
			flex-direction: column;
			text-align: center;
		}

		.footer-links {
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.heading-h1 {
			font-size: 2rem;
		}

		.heading-h2 {
			font-size: 1.75rem;
		}

		.container-medium, .container-small {
			padding: 0 1rem;
		}
	}
</style>