<script>
	import BottomNav from '$lib/components/BottomNav.svelte';
	import { designSystem } from '$lib/stores/designSystem';
</script>

<svelte:head>
	<title>Style Guide - Santiago Toquica Yanguas</title>
	<meta name="description" content="Style guide and design system for the portfolio website" />
</svelte:head>

<div class="container">
	<!-- Page Header -->
	<section class="page-header">
		<div class="container-main">
			<h1 class="main-title">Style Guide</h1>
			<p class="header-description">
				Manage the look and feel of the entire website from our style guide. Style and components used on the site are documented here, and any changes made will be immediately visible across all pages.
			</p>
		</div>
	</section>

	<!-- Colors Section -->
	<section class="section-block">
		<div class="container-main">
			<h2 class="section-title">Colors</h2>
			<p class="section-description">
				The primary colors and shades of gray on the website are managed through the Global Swatch feature.
			</p>
			<div class="color-swatches">
				<div class="color-swatch">
					<div class="swatch primary-color" style="background-color: {$designSystem.colors.primary}"></div>
					<span class="swatch-label">Primary</span>
					<span class="swatch-value">{$designSystem.colors.primary}</span>
				</div>
				<div class="color-swatch">
					<div class="swatch primary-dark" style="background-color: {$designSystem.colors.primaryDark}"></div>
					<span class="swatch-label">Primary Dark</span>
					<span class="swatch-value">{$designSystem.colors.primaryDark}</span>
				</div>
				<div class="color-swatch">
					<div class="swatch primary-light" style="background-color: {$designSystem.colors.primaryLight}"></div>
					<span class="swatch-label">Primary Light</span>
					<span class="swatch-value">{$designSystem.colors.primaryLight}</span>
				</div>
				<div class="color-swatch">
					<div class="swatch gray-1-color" style="background-color: {$designSystem.colors.gray1}"></div>
					<span class="swatch-label">Gray 1</span>
					<span class="swatch-value">{$designSystem.colors.gray1}</span>
				</div>
				<div class="color-swatch">
					<div class="swatch gray-2-color" style="background-color: {$designSystem.colors.gray2}"></div>
					<span class="swatch-label">Gray 2</span>
					<span class="swatch-value">{$designSystem.colors.gray2}</span>
				</div>
				<div class="color-swatch">
					<div class="swatch black-color" style="background-color: {$designSystem.colors.black}"></div>
					<span class="swatch-label">Black</span>
					<span class="swatch-value">{$designSystem.colors.black}</span>
				</div>
				<div class="color-swatch">
					<div class="swatch white-color" style="background-color: {$designSystem.colors.white}; border: 2px solid {$designSystem.colors.border.primary}"></div>
					<span class="swatch-label">White</span>
					<span class="swatch-value">{$designSystem.colors.white}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Typography Section -->
	<section class="section-block">
		<div class="container-main">
			<h2 class="section-title">Typography</h2>
			<p class="section-description">
				Heading classes are created to match the design style and apply them to different heading tags. This ensures that the style of heading tags that look good in design matches the recommended heading tags for SEO.
			</p>
			<div class="typography-examples">
				<div class="heading-example">
					<div class="example-label">
						<span class="label-text">H1</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">Heading H1</span>
					</div>
					<h1 class="heading-h1">Heading H1</h1>
				</div>
				<div class="heading-example">
					<div class="example-label">
						<span class="label-text">H2</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">Heading H2</span>
					</div>
					<h2 class="heading-h2">Heading H2</h2>
				</div>
				<div class="heading-example">
					<div class="example-label">
						<span class="label-text">H3</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">Heading H3</span>
					</div>
					<h3 class="heading-h3">Heading H3</h3>
				</div>
				<div class="heading-example">
					<div class="example-label">
						<span class="label-text">H4</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">Heading H4</span>
					</div>
					<h4 class="heading-h4">Heading H4</h4>
				</div>
				<div class="heading-example">
					<div class="example-label">
						<span class="label-text">H5</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">Heading H5</span>
					</div>
					<h5 class="heading-h5">Heading H5</h5>
				</div>
				<div class="heading-example">
					<div class="example-label">
						<span class="label-text">H6</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">Heading H6</span>
					</div>
					<h6 class="heading-h6">Heading H6</h6>
				</div>
			</div>
		</div>
	</section>

	<!-- Text Styles Section -->
	<section class="section-block">
		<div class="container-main">
			<h2 class="section-title">Text Styles</h2>
			<p class="section-description">
				Different text styles used throughout the website for various content types.
			</p>
			<div class="text-styles">
				<div class="text-example">
					<div class="example-label">
						<span class="label-text">Lead Text</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">text-lead</span>
					</div>
					<p class="text-lead">This is lead text used for important descriptions and introductions.</p>
				</div>
				<div class="text-example">
					<div class="example-label">
						<span class="label-text">Paragraph</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">text-paragraph</span>
					</div>
					<p class="text-paragraph">This is paragraph text used for body content and detailed descriptions.</p>
				</div>
				<div class="text-example">
					<div class="example-label">
						<span class="label-text">Small Text</span>
						<span class="badge" style="background-color: {$designSystem.colors.primary}">text-small</span>
					</div>
					<p class="text-small">This is small text used for captions, metadata, and secondary information.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Spacing Section -->
	<section class="section-block">
		<div class="container-main">
			<h2 class="section-title">Spacing</h2>
			<p class="section-description">
				Consistent spacing values used throughout the design system.
			</p>
			<div class="spacing-examples">
				<div class="spacing-item">
					<div class="spacing-visual xs" style="width: {$designSystem.spacing.xs}; height: {$designSystem.spacing.xs}"></div>
					<span class="spacing-label">XS - {$designSystem.spacing.xs}</span>
				</div>
				<div class="spacing-item">
					<div class="spacing-visual sm" style="width: {$designSystem.spacing.sm}; height: {$designSystem.spacing.sm}"></div>
					<span class="spacing-label">SM - {$designSystem.spacing.sm}</span>
				</div>
				<div class="spacing-item">
					<div class="spacing-visual md" style="width: {$designSystem.spacing.md}; height: {$designSystem.spacing.md}"></div>
					<span class="spacing-label">MD - {$designSystem.spacing.md}</span>
				</div>
				<div class="spacing-item">
					<div class="spacing-visual lg" style="width: {$designSystem.spacing.lg}; height: {$designSystem.spacing.lg}"></div>
					<span class="spacing-label">LG - {$designSystem.spacing.lg}</span>
				</div>
				<div class="spacing-item">
					<div class="spacing-visual xl" style="width: {$designSystem.spacing.xl}; height: {$designSystem.spacing.xl}"></div>
					<span class="spacing-label">XL - {$designSystem.spacing.xl}</span>
				</div>
				<div class="spacing-item">
					<div class="spacing-visual xxl" style="width: {$designSystem.spacing.xxl}; height: {$designSystem.spacing.xxl}"></div>
					<span class="spacing-label">XXL - {$designSystem.spacing.xxl}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Border Radius Section -->
	<section class="section-block">
		<div class="container-main">
			<h2 class="section-title">Border Radius</h2>
			<p class="section-description">
				Border radius values for different component types.
			</p>
			<div class="border-radius-examples">
				<div class="radius-item">
					<div class="radius-visual sm" style="border-radius: {$designSystem.borderRadius.sm}"></div>
					<span class="radius-label">SM - {$designSystem.borderRadius.sm}</span>
				</div>
				<div class="radius-item">
					<div class="radius-visual md" style="border-radius: {$designSystem.borderRadius.md}"></div>
					<span class="radius-label">MD - {$designSystem.borderRadius.md}</span>
				</div>
				<div class="radius-item">
					<div class="radius-visual lg" style="border-radius: {$designSystem.borderRadius.lg}"></div>
					<span class="radius-label">LG - {$designSystem.borderRadius.lg}</span>
				</div>
				<div class="radius-item">
					<div class="radius-visual xl" style="border-radius: {$designSystem.borderRadius.xl}"></div>
					<span class="radius-label">XL - {$designSystem.borderRadius.xl}</span>
				</div>
				<div class="radius-item">
					<div class="radius-visual pill" style="border-radius: {$designSystem.borderRadius.pill}"></div>
					<span class="radius-label">Pill - {$designSystem.borderRadius.pill}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Shadows Section -->
	<section class="section-block">
		<div class="container-main">
			<h2 class="section-title">Shadows</h2>
			<p class="section-description">
				Shadow values for different elevation levels.
			</p>
			<div class="shadow-examples">
				<div class="shadow-item">
					<div class="shadow-visual sm" style="box-shadow: {$designSystem.shadows.sm}"></div>
					<span class="shadow-label">Small Shadow</span>
				</div>
				<div class="shadow-item">
					<div class="shadow-visual md" style="box-shadow: {$designSystem.shadows.md}"></div>
					<span class="shadow-label">Medium Shadow</span>
				</div>
				<div class="shadow-item">
					<div class="shadow-visual lg" style="box-shadow: {$designSystem.shadows.lg}"></div>
					<span class="shadow-label">Large Shadow</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Buttons Section -->
	<section class="section-block">
		<div class="container-main">
			<h2 class="section-title">Buttons</h2>
			<p class="section-description">
				A variety of button styles are available throughout the website.
			</p>
			<div class="button-examples">
				<button class="button-primary" style="background-color: {$designSystem.colors.primary}; border-color: {$designSystem.colors.primary}">Button Primary</button>
				<button class="button-secondary">Button Secondary</button>
				<button class="button-small">Small Button</button>
				<button class="button-large">Large Button</button>
			</div>
		</div>
	</section>

	<!-- Bottom Navigation -->
	<BottomNav currentPage="/style-guide" />
</div>

<style>
	/* Import Inter font for consistency */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');



	/* Container System */
	.container {
		min-height: 100vh;
		background-color: #ffffff;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	:global(.dark) .container {
		background-color: #1a1a1a;
		color: #e0e0e0;
	}

	.container-main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Page Header */
	.page-header {
		padding: 80px 0 60px 0;
		text-align: center;
	}

	.main-title {
		font-size: 3.5rem;
		font-weight: 700;
		color: #000000;
		margin-bottom: 1.5rem;
		line-height: 1.2;
		transition: color 0.3s ease;
	}

	:global(.dark) .main-title {
		color: #ffffff;
	}

	.header-description {
		font-size: 1.125rem;
		color: #666666;
		line-height: 1.6;
		max-width: 800px;
		margin: 0 auto;
		transition: color 0.3s ease;
	}

	:global(.dark) .header-description {
		color: #a0a0a0;
	}

	/* Section Blocks */
	.section-block {
		padding: 60px 0;
		border-bottom: 1px solid #e9ecef;
		transition: border-color 0.3s ease;
	}

	:global(.dark) .section-block {
		border-bottom: 1px solid #333333;
	}

	.section-block:last-child {
		border-bottom: none;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #000000;
		margin-bottom: 1rem;
		line-height: 1.3;
		transition: color 0.3s ease;
	}

	:global(.dark) .section-title {
		color: #ffffff;
	}

	.section-description {
		font-size: 1.125rem;
		color: #666666;
		line-height: 1.6;
		margin-bottom: 2rem;
		transition: color 0.3s ease;
	}

	:global(.dark) .section-description {
		color: #a0a0a0;
	}

	/* Color Swatches */
	.color-swatches {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.color-swatch {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.swatch {
		width: 120px;
		height: 80px;
		border-radius: 12px;
		border: 2px solid #e9ecef;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.875rem;
		transition: border-color 0.3s ease;
	}

	:global(.dark) .swatch {
		border: 2px solid #333333;
	}

	.swatch-label {
		font-weight: 600;
		color: #000000;
		font-size: 1rem;
		transition: color 0.3s ease;
	}

	:global(.dark) .swatch-label {
		color: #ffffff;
	}

	.swatch-value {
		font-size: 0.875rem;
		color: #666666;
		font-family: monospace;
		transition: color 0.3s ease;
	}

	:global(.dark) .swatch-value {
		color: #a0a0a0;
	}

	/* Typography Examples */
	.typography-examples {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
	}

	.heading-example {
		padding: 1.5rem;
		background-color: #f8f9fa;
		border-radius: 12px;
		border: 1px solid #e9ecef;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	:global(.dark) .heading-example {
		background-color: #2a2a2a;
		border: 1px solid #333333;
	}

	.example-label {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.label-text {
		font-weight: 600;
		color: #000000;
		font-size: 1rem;
		transition: color 0.3s ease;
	}

	:global(.dark) .label-text {
		color: #ffffff;
	}

	.badge {
		color: #ffffff;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	/* Typography Styles */
	.heading-h1 {
		font-size: 3.5rem;
		font-weight: 700;
		color: #000000;
		line-height: 1.2;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .heading-h1 {
		color: #ffffff;
	}

	.heading-h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #000000;
		line-height: 1.3;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .heading-h2 {
		color: #ffffff;
	}

	.heading-h3 {
		font-size: 2rem;
		font-weight: 600;
		color: #000000;
		line-height: 1.3;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .heading-h3 {
		color: #ffffff;
	}

	.heading-h4 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #000000;
		line-height: 1.4;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .heading-h4 {
		color: #ffffff;
	}

	.heading-h5 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #000000;
		line-height: 1.4;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .heading-h5 {
		color: #ffffff;
	}

	.heading-h6 {
		font-size: 1rem;
		font-weight: 600;
		color: #000000;
		line-height: 1.4;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .heading-h6 {
		color: #ffffff;
	}

	/* Text Styles */
	.text-styles {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
	}

	.text-example {
		padding: 1.5rem;
		background-color: #f8f9fa;
		border-radius: 12px;
		border: 1px solid #e9ecef;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	:global(.dark) .text-example {
		background-color: #2a2a2a;
		border: 1px solid #333333;
	}

	.text-lead {
		font-size: 1.125rem;
		line-height: 1.6;
		color: #666666;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .text-lead {
		color: #a0a0a0;
	}

	.text-paragraph {
		font-size: 1rem;
		line-height: 1.6;
		color: #666666;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .text-paragraph {
		color: #a0a0a0;
	}

	.text-small {
		font-size: 0.875rem;
		line-height: 1.5;
		color: #666666;
		margin: 0;
		transition: color 0.3s ease;
	}

	:global(.dark) .text-small {
		color: #a0a0a0;
	}

	/* Spacing Examples */
	.spacing-examples {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.spacing-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background-color: #f8f9fa;
		border-radius: 12px;
		border: 1px solid #e9ecef;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	:global(.dark) .spacing-item {
		background-color: #2a2a2a;
		border: 1px solid #333333;
	}

	.spacing-visual {
		background-color: #007bff;
		border-radius: 4px;
	}

	.spacing-label {
		font-size: 0.875rem;
		color: #666666;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	:global(.dark) .spacing-label {
		color: #a0a0a0;
	}

	/* Border Radius Examples */
	.border-radius-examples {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.radius-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background-color: #f8f9fa;
		border-radius: 12px;
		border: 1px solid #e9ecef;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	:global(.dark) .radius-item {
		background-color: #2a2a2a;
		border: 1px solid #333333;
	}

	.radius-visual {
		width: 80px;
		height: 80px;
		background-color: #007bff;
	}

	.radius-label {
		font-size: 0.875rem;
		color: #666666;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	:global(.dark) .radius-label {
		color: #a0a0a0;
	}

	/* Shadow Examples */
	.shadow-examples {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.shadow-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background-color: #f8f9fa;
		border-radius: 12px;
		border: 1px solid #e9ecef;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	:global(.dark) .shadow-item {
		background-color: #2a2a2a;
		border: 1px solid #333333;
	}

	.shadow-visual {
		width: 120px;
		height: 80px;
		background-color: #ffffff;
		border-radius: 12px;
		transition: background-color 0.3s ease;
	}

	:global(.dark) .shadow-visual {
		background-color: #333333;
	}

	.shadow-label {
		font-size: 0.875rem;
		color: #666666;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	:global(.dark) .shadow-label {
		color: #a0a0a0;
	}

	/* Button Examples */
	.button-examples {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 2rem;
	}

	.button-primary {
		background-color: #000000;
		color: #ffffff;
		padding: 12px 24px;
		border: none;
		border-radius: 50px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: 'Inter', sans-serif;
	}

	.button-primary:hover {
		background-color: #333333;
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
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: 'Inter', sans-serif;
	}

	.button-secondary:hover {
		background-color: #000000;
		color: #ffffff;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.button-small {
		background-color: #007bff;
		color: #ffffff;
		padding: 8px 16px;
		border: none;
		border-radius: 25px;
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: 'Inter', sans-serif;
	}

	.button-small:hover {
		background-color: #0056b3;
		transform: translateY(-1px);
		box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
	}

	.button-large {
		background-color: #007bff;
		color: #ffffff;
		padding: 16px 32px;
		border: none;
		border-radius: 50px;
		font-size: 1.125rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: 'Inter', sans-serif;
	}

	.button-large:hover {
		background-color: #0056b3;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 123, 255, 0.3);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.main-title {
			font-size: 2.5rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.container-main {
			padding: 0 1rem;
		}

		.color-swatches {
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			gap: 1rem;
		}

		.swatch {
			width: 100px;
			height: 60px;
		}

		.button-examples {
			flex-direction: column;
		}

		.button-primary, .button-secondary, .button-small, .button-large {
			width: 100%;
			text-align: center;
		}

		.spacing-examples,
		.border-radius-examples,
		.shadow-examples {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.main-title {
			font-size: 2rem;
		}

		.section-title {
			font-size: 1.75rem;
		}

		.color-swatches {
			grid-template-columns: 1fr;
		}

		.swatch {
			width: 120px;
			height: 80px;
		}
	}
</style> 