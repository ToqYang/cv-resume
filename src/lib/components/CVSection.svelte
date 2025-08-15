<script>
	export let title;
	export let className = '';
</script>

<section class="cv-section {className}">
	<h3 class="section-title">{title}</h3>
	<slot />
</section>

<style>
	.cv-section {
		padding: var(--spacing-8);
		border-bottom: 1px solid var(--border-color);
	}

	.cv-section:last-child {
		border-bottom: none;
	}

	.section-title {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: var(--spacing-6);
		position: relative;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 40px;
		height: 3px;
		background-color: var(--primary-color);
		border-radius: 2px;
	}
</style> 