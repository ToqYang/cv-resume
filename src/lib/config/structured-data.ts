/**
 * JSON-LD structured data for SEO
 * @param {Object} options - Configuration options
 * @returns {Object} - JSON-LD structured data object
 */
export function getPersonSchema(options = {}) {
  const defaults = {
    name: 'Santiago Engineer',
    jobTitle: 'Software Developer',
    url: 'https://toqyang.com',
    image: 'https://toqyang.com/photo_profile.jpeg',
    description: 'Santiago Engineer - Software Developer CV and Portfolio',
    email: '', // Add email if available
    telephone: '', // Add telephone if available
    address: {
      addressLocality: '', // Add city if available
      addressRegion: '', // Add region/state if available
      addressCountry: '' // Add country if available
    },
    sameAs: [
      // Add social media profiles if available
      // 'https://github.com/username',
      // 'https://linkedin.com/in/username',
      // 'https://twitter.com/username'
    ]
  };

  const config = { ...defaults, ...options };

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.name,
    jobTitle: config.jobTitle,
    url: config.url,
    image: config.image,
    description: config.description,
    email: config.email || undefined,
    telephone: config.telephone || undefined,
    address: config.address.addressLocality ? {
      '@type': 'PostalAddress',
      addressLocality: config.address.addressLocality,
      addressRegion: config.address.addressRegion,
      addressCountry: config.address.addressCountry
    } : undefined,
    sameAs: config.sameAs.length ? config.sameAs : undefined
  };
}

/**
 * Get WebSite schema for the website
 * @param {Object} options - Configuration options
 * @returns {Object} - JSON-LD structured data object
 */
export function getWebsiteSchema(options = {}) {
  const defaults = {
    name: 'Santiago Engineer - CV',
    url: 'https://toqyang.com',
    description: 'Santiago Engineer - Software Developer CV and Portfolio',
    author: 'Santiago Engineer'
  };

  const config = { ...defaults, ...options };

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.author
    }
  };
}