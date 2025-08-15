<script>
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { designSystem } from '$lib/stores/designSystem';
	import { currentLanguage } from '$lib/stores/translations';
	import { getSystemDesignConfig } from '$lib/config/systemDesignConfig';
	
	// Reactive config based on current language
	$: config = $currentLanguage === 'ES' ? getSystemDesignConfig('ES') : getSystemDesignConfig('EN');
</script>

<svelte:head>
	<title>System Design - Santiago Toquica Yanguas</title>
	<meta name="description" content="System design expert specializing in scalable architectures, distributed systems, and microservices" />
</svelte:head>

<div class="container">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="container-medium">
			<div class="hero-content">
				<h1 class="heading-h1">{config.hero.title}</h1>
				<p class="text-lead">
					{config.hero.description}
				</p>
				<div class="hero-actions">
					<a href="/contact" class="button-primary">{config.buttons.contact}</a>
					<a href="/projects" class="button-secondary">{config.buttons.portfolio}</a>
				</div>
			</div>
		</div>
	</section>

	<!-- System Design Expertise -->
	<section class="expertise-section">
		<div class="container-medium">
			<h2 class="heading-h2">{config.expertise.title}</h2>
			<div class="expertise-grid">
				<div class="expertise-card">
					<div class="card-icon">🏗️</div>
					<h3 class="heading-h4">{config.expertise.architecture.title}</h3>
					<p class="text-paragraph">
						{config.expertise.architecture.description}
					</p>
					<ul class="skill-list">
						{#each config.expertise.architecture.skills as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>

				<div class="expertise-card">
					<div class="card-icon">⚡</div>
					<h3 class="heading-h4">{config.expertise.performance.title}</h3>
					<p class="text-paragraph">
						{config.expertise.performance.description}
					</p>
					<ul class="skill-list">
						{#each config.expertise.performance.skills as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>

				<div class="expertise-card">
					<div class="card-icon">🛡️</div>
					<h3 class="heading-h4">{config.expertise.reliability.title}</h3>
					<p class="text-paragraph">
						{config.expertise.reliability.description}
					</p>
					<ul class="skill-list">
						{#each config.expertise.reliability.skills as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Bottom Navigation -->
	<BottomNav currentPage="/system-design" />
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





	/* Typography */
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



	/* Expertise Section */
	.expertise-section {
		padding-bottom: 8rem;
	}

	/* Hero Section */
	.hero-section {
		padding: 120px 0 80px 0;
		background-color: #f8f9fa;
	}

	.hero-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
	}

	/* Buttons */
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

	/* Expertise Grid */
	.expertise-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.expertise-card {
		padding: 2rem;
		background-color: #ffffff;
		border: 1px solid #e9ecef;
		border-radius: 12px;
		transition: all 0.3s ease;
	}

	.expertise-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.card-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.skill-list {
		list-style: none;
		padding: 0;
		margin-top: 1rem;
	}

	.skill-list li {
		padding: 0.5rem 0;
		border-bottom: 1px solid #f0f0f0;
		font-size: 0.875rem;
		color: #666666;
	}

	.skill-list li:last-child {
		border-bottom: none;
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



		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		.button-primary, .button-secondary {
			width: 100%;
			max-width: 300px;
			text-align: center;
		}

		.expertise-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.heading-h1 {
			font-size: 2rem;
		}

		.heading-h2 {
			font-size: 1.75rem;
		}

		.container-medium {
			padding: 0 1rem;
		}
	}
</style> 