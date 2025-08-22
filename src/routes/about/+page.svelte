<script lang="ts">
	import BottomNav from '$lib/components/BottomNav.svelte';
	import { currentLanguage } from '$lib/stores/translations';
import { getCvConfig } from '$lib/config/cvConfig';
	
	// Reactive config based on current language
	$: config = $currentLanguage === 'ES' ? getCvConfig('ES') : getCvConfig('EN');
	
	function handlePrintCV() {
		if (typeof window === 'undefined') {
			alert('Printing is only available in the browser');
			return;
		}
		
		// Set the document title for the PDF filename
		const originalTitle = document.title;
		document.title = 'CV_SantiagoToquicaYanguas';
		
		// Add a meta tag for better PDF naming support
		let metaTag = document.querySelector('meta[name="pdf-filename"]') as HTMLMetaElement;
		if (!metaTag) {
			metaTag = document.createElement('meta') as HTMLMetaElement;
			metaTag.name = 'pdf-filename';
			document.head.appendChild(metaTag);
		}
		metaTag.content = 'CV_SantiagoToquicaYanguas.pdf';
		
		// Print the document
		window.print();
		
		// Restore the original title after printing
		setTimeout(() => {
			document.title = originalTitle;
			if (metaTag) {
				metaTag.remove();
			}
		}, 100);
	}
</script>

<svelte:head>
	<title>{config.meta.title}</title>
	<meta name="description" content={config.meta.description} />

	<!-- Open Graph -->
	<meta property="og:title" content={config.meta.title} />
	<meta property="og:description" content={config.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/photo_profile.jpeg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={config.meta.title} />
	<meta name="twitter:description" content={config.meta.description} />
	<meta name="twitter:image" content="/photo_profile.jpeg" />
</svelte:head>

<div class="cv-container">
	<!-- CV Content -->
	<div id="cv-content" class="cv-content print-content">
		<!-- Header -->
		<header class="cv-header">
			<div class="header-main">
				<h1 class="name">{config.personal.name}</h1>
				<h2 class="title">{config.personal.title}</h2>
			</div>
			<div class="header-contact">
				<div class="contact-info">
					{#each config.personal.contactInfo as contact}
						<div class="contact-item">
							{contact.icon} <a href={contact.link} target="_blank" rel="noopener">{contact.text}</a>
						</div>
					{/each}
				</div>
			</div>
		</header>

		<!-- Skills -->
		<section class="cv-section">
			<h3 class="section-title">{config.sections.skills.title}</h3>
			<p class="skills-text">{config.sections.skills.content}</p>
		</section>

		<!-- Summary -->
		<section class="cv-section">
			<h3 class="section-title">{config.sections.summary.title}</h3>
			<p class="summary-text">{config.sections.summary.content}</p>
		</section>

		<!-- Professional Experience -->
		<section class="cv-section">
			<h3 class="section-title">{config.sections.experience.title}</h3>
			{#each config.sections.experience.items as job}
			<div class="experience-item">
				<div class="job-header">
					<div class="job-info">
						<h4 class="job-title">{job.title}</h4>
						<div class="company-name">{job.company}</div>
					</div>
					<div class="job-meta">
						<div class="job-period">{job.period}</div>
						<div class="job-location">{job.location}</div>
					</div>
				</div>
				{#if job.achievements}
				<ul class="achievements-list">
					{#each job.achievements as achievement}
					<li>{achievement}</li>
					{/each}
				</ul>
				{/if}
			</div>
			{/each}
		</section>

		<!-- Projects -->
		<section class="cv-section">
			<h3 class="section-title">{config.sections.projects.title}</h3>
			{#each config.sections.projects.items as project}
			<div class="project-item">
				<div class="project-block">
					<a href="{project.link}" target="_blank" rel="noopener">{project.name}</a>
					<span class="project-description"> - {project.description}</span>
				</div>
			</div>
			{/each}
		</section>

		<!-- Education -->
		<section class="cv-section">
			<h3 class="section-title">{config.sections.education.title}</h3>
			{#each config.sections.education.items as education}
			<div class="education-item">
				<div class="education-header">
					<div class="education-info">
						<h4 class="education-title">{education.title}</h4>
						<div class="institution-name">{education.institution}</div>
					</div>
					<div class="education-meta">
						<div class="education-period">{education.period}</div>
					</div>
				</div>
			</div>
			{/each}
		</section>

		<!-- Training -->
		<section class="cv-section">
			<h3 class="section-title">{config.sections.training.title}</h3>
			{#each config.sections.training.items as training}
			<div class="training-item">
				<div class="training-line">
					{#if training.link}
						<a href="{training.link}" target="_blank" rel="noopener">{training.name}</a>
					{:else}
						{training.name}
					{/if}
					<span class="training-institution"> - {training.institution}</span>
				</div>
			</div>
			{/each}
		</section>
	</div>

	<!-- Print Button -->
	<button class="print-button no-print" on:click={handlePrintCV} title={config.buttons.printTooltip}>
		🖨️
	</button>

	<!-- Bottom Navigation -->
	<BottomNav currentPage="/about" />
</div>

<style>
	.cv-container {
		min-height: 100vh;
		background-color: #f5f5f5;
		/* Extra bottom padding to prevent overlap with fixed BottomNav */
		padding-bottom: 160px;
	}

	/* Print Button */
	.print-button {
		position: fixed;
		bottom: 120px;
		right: 20px;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: var(--primary-color);
		color: white;
		border: none;
		font-size: 24px;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transition: all 0.3s ease;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.print-button:hover {
		background-color: var(--primary-dark);
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
	}

	.print-button:active {
		transform: translateY(0);
	}

	.cv-content {
		background-color: var(--background-primary);
		margin: var(--spacing-2) auto var(--spacing-4) auto;
		max-width: 1000px;
		box-shadow: var(--shadow-lg);
		border-radius: var(--border-radius-xl);
		overflow: hidden;
		padding: var(--spacing-2) var(--spacing-8);
	}

	@media (max-width: 768px) {
		.cv-content {
			padding: var(--spacing-6);
		}

		/* Increase bottom padding further on mobile where BottomNav consumes more space */
		.cv-container {
			padding-bottom: 200px;
		}
	}

	/* Remove extra space when printing */
	@media print {
		.cv-container {
			padding-bottom: 0 !important;
		}
	}

	/* Header Styles - Reduced vertical spacing */
	.cv-header {
		background-color: var(--background-primary);
		padding: var(--spacing-3) var(--spacing-4);
		text-align: center;
	}

	.name {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.25rem;
		text-transform: uppercase;
	}

	.title {
		font-size: 1.2rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}

	.header-contact {
		margin-top: 0.5rem;
	}

	.contact-info {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--spacing-4);
	}

	.contact-item {
		display: flex;
		gap: var(--spacing-1);
		font-size: 0.9rem;
	}

	.contact-item a {
		color: var(--text-primary);
		text-decoration: none;
	}

	.contact-item a:hover {
		color: var(--primary-color);
	}

	/* CV Section Styles - Single lines and centered titles */
	.cv-section {
		padding: 0;
		border-bottom: none;
		margin-bottom: 0.5rem;
	}

	.cv-section:last-child {
		border-bottom: none;
	}

	.section-title {
		font-size: 1.2rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 0.5rem;
		text-align: center;
		text-transform: capitalize;
		border-bottom: 1px solid #e0e0e0;
		padding-bottom: var(--spacing-2);
		line-height: 1.2;
	}

	/* Reduced line height for all text */
	.skills-text, .summary-text {
		line-height: 1.4;
		color: var(--text-primary);
		margin-bottom: 0;
	}

	.experience-item {
		margin-bottom: var(--spacing-4);
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--spacing-2);
	}

	.job-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0;
	}

	.company-name {
		font-weight: 500;
		color: var(--text-secondary);
	}

	.job-meta {
		text-align: right;
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.job-period {
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	.job-location {
		font-size: 0.8rem;
	}

	.achievements-list {
		margin-top: var(--spacing-2);
		padding-left: var(--spacing-4);
	}

	.achievements-list li {
		margin-bottom: 0.5rem;
		line-height: 1.3;
		color: var(--text-primary);
		font-size: 0.9rem;
	}

	.project-item {
		margin-bottom: var(--spacing-3);
	}

	.project-block {
		font-size: 0.9rem;
		line-height: 1.3;
		margin-bottom: var(--spacing-1);
	}

	.project-block a {
		color: var(--text-primary);
		text-decoration: none;
		font-weight: 600;
	}

	.project-block a:hover {
		color: var(--primary-color);
		text-decoration: underline;
	}

	.project-description {
		color: var(--text-primary);
		font-weight: normal;
	}

	/* Education and Training Styles */
	.education-item, .training-item {
		margin-bottom: var(--spacing-2);
	}

	.education-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--spacing-1);
	}

	.training-line {
		font-size: 0.9rem;
		line-height: 1.3;
		margin-bottom: var(--spacing-1);
	}

	.training-line a {
		color: var(--text-primary);
		text-decoration: none;
		font-weight: 600;
	}

	.training-line a:hover {
		color: var(--primary-color);
		text-decoration: underline;
	}

	.training-institution {
		color: var(--text-secondary);
		font-weight: normal;
	}

	.education-title {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0;
	}

	.institution-name, .training-institution {
		font-weight: 500;
		color: var(--text-secondary);
		font-size: 0.85rem;
	}

	.education-meta {
		text-align: right;
		font-size: 0.8rem;
		color: var(--text-secondary);
	}

	.education-period {
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	/* Print styles */
	@media print {
		@page {
			margin: 0.25in 0.25in;
			size: A4;
		}

		*
{
    box-sizing: border-box;
}

		.cv-container {
			max-width: none;
			min-height: auto;
			background-color: white !important;
			color: black !important;
		}

		.no-print {
			display: none !important;
		}

		.cv-content, .print-content {
			box-shadow: none;
			max-width: 100%;
			padding: 0;
			margin: 0;
			background-color: white !important;
			color: black !important;
		}

		.cv-header {
			padding: 0.25rem 0;
			margin-bottom: 0.5rem;
			background-color: white !important;
		}

		.name {
			font-size: 1.4rem;
			margin-bottom: 0.1rem;
			color: black !important;
		}

		.title {
			font-size: 0.8rem;
			margin-bottom: 0.25rem;
			color: black !important;
		}

		.contact-info {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
			margin-top: 0.25rem;
		}

		.contact-item {
			font-size: 0.6rem;
			color: black !important;
		}

		.contact-item a {
			color: black !important;
		}

		.cv-section {
			margin-bottom: 0.25rem;
			page-break-inside: avoid;
		}

		.cv-section:last-child {
			margin-bottom: 0;
		}

		.section-title {
			font-size: 0.85rem;
			margin-bottom: 0.15rem;
			padding-bottom: 0.05rem;
			color: black !important;
			border-bottom: 1px solid #000 !important;
		}

		.job-title {
			font-size: 0.75rem;
			margin-bottom: 0.05rem;
			color: black !important;
		}

		.company-name {
			font-size: 0.65rem;
			margin-bottom: 0.05rem;
			color: black !important;
		}

		.job-meta {
			font-size: 0.55rem;
			color: black !important;
		}

		.summary-text, .skills-text {
			font-size: 0.7rem;
			line-height: 1.4;
			margin-bottom: 0.15rem;
			color: black !important;
		}

		.achievements-list {
			margin: 0.05rem 0;
			padding-left: 0.8rem;
		}

		.achievements-list li {
			font-size: 0.65rem;
			line-height: 1.3;
			margin-bottom: 0.02rem;
			color: black !important;
		}

		.experience-item {
			margin-bottom: 0.25rem;
			page-break-inside: avoid;
		}

		.project-item {
			margin-bottom: 0.15rem;
		}

		.project-block {
			font-size: 0.7rem;
			line-height: 1.3;
			margin-bottom: 0.05rem;
		}

		.project-block a {
			color: black !important;
		}

		.project-description {
			color: black !important;
		}

		.job-header {
			display: flex !important;
			justify-content: space-between !important;
			align-items: flex-start !important;
			flex-direction: row !important;
			margin-bottom: 0.15rem;
		}

		.job-meta {
			text-align: right;
			font-size: 0.65rem;
			color: black !important;
			min-width: 120px;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		.job-period {
			font-weight: 500;
			margin-bottom: 0.05rem;
			white-space: nowrap;
			text-align: right;
			line-height: 1.3;
			color: black !important;
		}

		.job-location {
			font-size: 0.6rem;
			white-space: nowrap;
			text-align: right;
			line-height: 1.3;
			color: black !important;
		}

		/* Education and Training print styles */
		.education-item, .training-item {
			margin-bottom: 0.1rem;
			page-break-inside: avoid;
		}

		.training-line {
			font-size: 0.7rem;
			line-height: 1.3;
			margin-bottom: 0.05rem;
			color: black !important;
		}

		.training-line a {
			color: black !important;
		}

		.training-institution {
			color: black !important;
		}

		.education-title {
			font-size: 0.75rem;
			margin-bottom: 0.05rem;
			line-height: 1.3;
			color: black !important;
		}

		.institution-name, .training-institution {
			font-size: 0.65rem;
			margin-bottom: 0.05rem;
			line-height: 1.3;
			color: black !important;
		}

		.education-meta {
			font-size: 0.65rem;
			line-height: 1.3;
			color: black !important;
		}

		.education-header {
			display: flex !important;
			justify-content: space-between !important;
			align-items: flex-start !important;
			flex-direction: row !important;
			margin-bottom: 0.1rem;
		}

		/* Ensure training section is visible in print */
		.cv-section:has(.training-item) {
			display: block !important;
			page-break-inside: avoid;
		}

		/* Remove height constraint to show all sections */
		.cv-content {
			height: auto;
			overflow: visible;
		}
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.cv-container {
			padding: var(--spacing-2);
		}

		.cv-content {
			padding: var(--spacing-6);
		}

		.name {
			font-size: 2rem;
		}

		/* Preserve desktop layout for job-header */
		.job-header {
			display: flex !important;
			justify-content: space-between !important;
			align-items: flex-start !important;
			flex-direction: row !important;
		}

		/* Keep job-meta right-aligned */
		.job-meta {
			text-align: right !important;
			min-width: 120px;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		/* Ensure job-period and job-location maintain their style */
		.job-period {
			font-weight: 500;
			margin-bottom: 0.25rem;
			white-space: nowrap;
			text-align: right;
		}

		.job-location {
			font-size: 0.8rem;
			white-space: nowrap;
			text-align: right;
		}

		/* Preserve desktop layout for education-header */
		.education-header {
			display: flex !important;
			justify-content: space-between !important;
			align-items: flex-start !important;
			flex-direction: row !important;
		}

		/* Keep education-meta right-aligned */
		.education-meta {
			text-align: right !important;
			min-width: 120px;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		/* Ensure education-period maintains its style */
		.education-period {
			font-weight: 500;
			white-space: nowrap;
			text-align: right;
		}
	}
</style>