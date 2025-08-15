<script lang="ts">
  import { getPersonSchema, getWebsiteSchema } from '$lib/config/structured-data';
  
  export let type: 'website' | 'person' = 'website';
  export let options: Record<string, any> = {};
  
  let schema: Record<string, any>;
  
  $: schema = type === 'person' ? getPersonSchema(options) : getWebsiteSchema(options);
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>