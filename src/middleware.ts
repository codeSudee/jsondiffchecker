import { defineMiddleware } from 'astro/middleware';

/**
 * Hosts that should never be indexed by search engines (preview/staging
 * deployments). The production custom domain is intentionally excluded.
 *
 * Note: on Cloudflare Workers, prerendered/static pages are served directly
 * from the assets binding and never reach this middleware. The header is
 * enforced in production by `src/worker.ts` (the custom Workers entry point
 * configured via `main` in wrangler.jsonc, combined with `run_worker_first`).
 * This middleware exists for local dev (`astro dev`) and for any future
 * on-demand rendered routes.
 */
function isNonCanonicalHost(hostname: string): boolean {
  return hostname.endsWith('.workers.dev');
}

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  const hostHeader = context.request.headers.get('host') ?? '';
  const hostname = hostHeader.split(':')[0];

  if (isNonCanonicalHost(hostname)) {
    response.headers.set('X-Robots-Tag', 'noindex');
  }

  return response;
});
