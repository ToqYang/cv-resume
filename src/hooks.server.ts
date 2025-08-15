import { generateSitemap } from './lib/utils/sitemap';
import type { Handle, HandleServerError } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  return await resolve(event);
};

export const handleError: HandleServerError = ({ error, event }) => {
  console.error('Server error:', error);
  return {
    message: 'An unexpected error occurred. Please try again later.',
    code: (error as any)?.code || 'UNKNOWN'
  };
};
