<script>
	import { cvData } from '$lib/stores/cvData';
	import BottomNav from '$lib/components/BottomNav.svelte';
</script>

<svelte:head>
	<title>Projects - Santiago Toquica Yanguas</title>
	<meta name="description" content="Portfolio projects by Santiago Toquica Yanguas - Software Engineer" />
</svelte:head>

<div class="projects-container">
	<!-- Header -->
	<div class="projects-header">
		<h1>Projects</h1>
		<p>Showcase of my technical projects and contributions</p>
	</div>

	{#if $cvData}
		<!-- Projects Grid -->
		<div class="projects-grid">
			{#each $cvData.projects as project}
				<div class="project-card">
					<div class="project-header">
						<h3 class="project-title">{project.name}</h3>
						<div class="project-technologies">
							{#each project.technologies as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
						</div>
					</div>
					<p class="project-description">{project.description}</p>
					<div class="project-actions">
						<a href={project.link} target="_blank" rel="noopener noreferrer" class="btn">
							View Repository →
						</a>
					</div>
				</div>
			{/each}
		</div>

		<!-- Technical Skills -->
		<div class="skills-section">
			<h2>Technical Skills</h2>
			<div class="skills-grid">
				{#each $cvData.skills.split(', ') as skill}
					<span class="skill-tag">{skill.trim()}</span>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Bottom Navigation -->
	<BottomNav currentPage="/projects" />
</div>

<style>
	.projects-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-4);
		background-color: var(--background-primary);
		min-height: 100vh;
		position: relative;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.projects-header {
		text-align: center;
		margin-bottom: var(--spacing-8);
		padding: var(--spacing-6);
		background-color: var(--background-accent);
		border-radius: var(--border-radius-lg);
	}

	.projects-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: var(--spacing-2);
	}

	.projects-header p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: var(--spacing-6);
		margin-bottom: var(--spacing-8);
	}

	.project-card {
		background-color: var(--card-bg);
		padding: var(--spacing-6);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-md);
		transition: all 0.3s ease;
		border: 1px solid var(--border-color);
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.project-header {
		margin-bottom: var(--spacing-4);
	}

	.project-title {
		font-size: 1.4rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: var(--spacing-3);
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-2);
		margin-bottom: var(--spacing-3);
	}

	.tech-tag {
		background-color: var(--primary-color);
		color: white;
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: var(--border-radius);
		font-size: 0.8rem;
		font-weight: 500;
	}

	.project-description {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: var(--spacing-4);
		font-size: 1rem;
	}

	.project-actions {
		display: flex;
		justify-content: flex-end;
	}

	.skills-section {
		background-color: var(--card-bg);
		padding: var(--spacing-6);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-md);
		margin-bottom: 80px;
		border: 1px solid var(--border-color);
	}

	.skills-section h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: var(--spacing-4);
	}

	.skills-grid {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-2);
	}

	.skill-tag {
		background-color: var(--background-accent);
		color: var(--text-primary);
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: var(--border-radius);
		font-size: 0.9rem;
		font-weight: 500;
		border: 1px solid var(--border-color);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.projects-container {
			padding: var(--spacing-2);
		}

		.projects-header {
			padding: var(--spacing-4);
		}

		.projects-header h1 {
			font-size: 2rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-4);
		}

		.project-card {
			padding: var(--spacing-4);
		}
	}
</style> 