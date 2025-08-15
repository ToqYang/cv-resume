<script>
  export let title = 'Santiago Engineer - CV';
  export let description = 'Santiago Engineer - Software Developer CV and Portfolio showcasing projects, skills, and experience';
  export let keywords = 'Santiago Engineer, software developer, web development, portfolio, resume, CV, projects';
  export let image = 'https://toqyang.com/photo_profile.jpeg';
  export let url = 'https://toqyang.com';
  export let type = 'website';
  
  // Compute the canonical URL
  $: canonicalUrl = url.endsWith('/') ? url.slice(0, -1) : url;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>