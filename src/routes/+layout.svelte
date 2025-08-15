<script>
	import '../app.css';
	import LanguageButton from '$lib/components/LanguageButton.svelte';
	import MetaTags from '$lib/components/SEO/MetaTags.svelte';
	import StructuredData from '$lib/components/SEO/StructuredData.svelte';

	// Default SEO values for the entire site
	const siteUrl = 'https://toqyang.com';
</script>

<!-- Add default SEO components -->
<MetaTags />
<StructuredData type="website" />
<StructuredData type="person" />

<LanguageButton />

<main>
	<slot />
</main>