<script lang="ts">
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentLanguage } from '$lib/stores/translations';
	import { getBlogConfig } from '$lib/config/blogConfig';
	
	let selectedSource = 'all';
	let currentPage = 1;
	const articlesPerPage = 6;

	// Reactive config based on current language
	$: config = $currentLanguage === 'ES' ? getBlogConfig('ES') : getBlogConfig('EN');

	$: filteredArticles = selectedSource === 'all' 
		? [...config.articles.freeCodeCamp, ...config.articles.medium]
		: selectedSource === 'freeCodeCamp' 
			? config.articles.freeCodeCamp 
			: config.articles.medium;

	$: totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
	$: paginatedArticles = filteredArticles.slice(
		(currentPage - 1) * articlesPerPage,
		currentPage * articlesPerPage
	);

	function filterBySource(source: string) {
		selectedSource = source;
		currentPage = 1; // Reset to first page when filtering
	}

	function goToPage(page: number) {
		currentPage = page;
	}

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}

	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}
</script>

<svelte:head>
	<title>Blog - Santiago Toquica Yanguas</title>
	<meta name="description" content="Technical articles and tutorials by Santiago Toquica Yanguas" />
</svelte:head>

<div class="blog-container">
	<!-- Header -->
	<div class="blog-header">
		<h1>{config.hero.title}</h1>
		<p>{config.hero.description}</p>
	</div>

	<!-- Filter Controls -->
	<div class="filter-controls">
		{#each config.filters as filter}
			<button 
				class="filter-btn" 
				class:active={selectedSource === filter.id}
				on:click={() => filterBySource(filter.id)}
			>
				{filter.label} ({filter.getCount(config.articles.freeCodeCamp, config.articles.medium)})
			</button>
		{/each}
	</div>

	<!-- Articles Grid -->
	<div class="articles-grid">
		{#each paginatedArticles as article}
			<article class="article-card">
				<div class="article-header">
					<span class="article-category">{article.category}</span>
					<span class="article-source">{article.source}</span>
				</div>
				<h3 class="article-title">
					<a href={article.url} target="_blank" rel="noopener noreferrer">
						{article.title}
					</a>
				</h3>
				<p class="article-description">{article.description}</p>
				<div class="article-meta">
					<span class="article-date">{article.date}</span>
					<a href={article.url} target="_blank" rel="noopener noreferrer" class="read-more">
						{config.buttons.readArticle}
					</a>
				</div>
			</article>
		{/each}
	</div>

	<!-- Pagination -->
	{#if totalPages > 1}
		<div class="pagination">
			<button 
				class="pagination-btn" 
				class:disabled={currentPage === 1}
				on:click={prevPage}
				disabled={currentPage === 1}
			>
				← {$currentLanguage === 'ES' ? 'Anterior' : 'Previous'}
			</button>
			
			<div class="page-numbers">
				{#each Array.from({length: totalPages}, (_, i) => i + 1) as page}
					<button 
						class="page-btn" 
						class:active={page === currentPage}
						on:click={() => goToPage(page)}
					>
						{page}
					</button>
				{/each}
			</div>
			
			<button 
				class="pagination-btn" 
				class:disabled={currentPage === totalPages}
				on:click={nextPage}
				disabled={currentPage === totalPages}
			>
				{$currentLanguage === 'ES' ? 'Siguiente' : 'Next'} →
			</button>
		</div>
	{/if}

	<!-- Bottom Navigation and Footer -->
	<BottomNav currentPage="/blog" />
	<Footer />
</div>

<style>
	/* Import Inter font for consistency */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

	.blog-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-4);
		background-color: var(--background-primary);
		min-height: 100vh;
		position: relative;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		padding-bottom: 120px;
	}

	.blog-header {
		text-align: center;
		margin-bottom: var(--spacing-8);
		padding: var(--spacing-6);
		background-color: var(--background-accent);
		border-radius: var(--border-radius-lg);
	}

	.blog-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: var(--spacing-2);
	}

	.blog-header p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto;
	}

	.filter-controls {
		display: flex;
		justify-content: center;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-8);
		flex-wrap: wrap;
	}

	.filter-btn {
		padding: var(--spacing-2) var(--spacing-4);
		border: 2px solid var(--border-color);
		background-color: var(--background-primary);
		color: var(--text-primary);
		border-radius: var(--border-radius-lg);
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.filter-btn:hover {
		background-color: var(--background-accent);
		border-color: var(--primary-color);
	}

	.filter-btn.active {
		background-color: var(--primary-color);
		color: white;
		border-color: var(--primary-color);
	}

	.articles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: var(--spacing-6);
		margin-bottom: 80px;
	}

	.article-card {
		background-color: white;
		border-radius: var(--border-radius-lg);
		padding: var(--spacing-6);
		box-shadow: var(--shadow-md);
		transition: all 0.3s ease;
		border: 1px solid var(--border-color);
	}

	.article-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.article-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--spacing-4);
	}

	.article-category {
		background-color: var(--primary-color);
		color: white;
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: var(--border-radius);
		font-size: 0.8rem;
		font-weight: 500;
	}

	.article-source {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.article-title {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: var(--spacing-3);
		line-height: 1.4;
	}

	.article-title a {
		color: inherit;
		text-decoration: none;
	}

	.article-title a:hover {
		color: var(--primary-color);
	}

	.article-description {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: var(--spacing-4);
	}

	.article-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--spacing-3);
		border-top: 1px solid var(--border-color);
	}

	.article-date {
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	.read-more {
		color: var(--primary-color);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
		transition: color 0.2s ease;
	}

	.read-more:hover {
		color: var(--primary-dark);
	}

	/* Pagination */
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 3rem;
		padding: 2rem 0;
	}

	.pagination-btn {
		background-color: #ffffff;
		color: #333333;
		border: 2px solid #e9ecef;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: 'Inter', sans-serif;
	}

	.pagination-btn:hover:not(:disabled) {
		background-color: #f8f9fa;
		border-color: #007bff;
		color: #007bff;
	}

	.pagination-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.page-numbers {
		display: flex;
		gap: 0.5rem;
	}

	.page-btn {
		background-color: #ffffff;
		color: #666666;
		border: 2px solid #e9ecef;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 40px;
		font-family: 'Inter', sans-serif;
	}

	.page-btn:hover {
		background-color: #f8f9fa;
		border-color: #007bff;
		color: #007bff;
	}

	.page-btn.active {
		background-color: #007bff;
		color: #ffffff;
		border-color: #007bff;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.blog-container {
			padding: var(--spacing-2);
		}

		.blog-header {
			padding: var(--spacing-4);
		}

		.blog-header h1 {
			font-size: 2rem;
		}

		.filter-controls {
			flex-direction: column;
			align-items: center;
		}

		.articles-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-4);
		}

		.article-card {
			padding: var(--spacing-4);
		}

		.article-meta {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-2);
		}

		.pagination {
			flex-direction: column;
			gap: 1rem;
		}
		
		.page-numbers {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style> 