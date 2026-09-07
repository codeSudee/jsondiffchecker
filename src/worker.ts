import { handle } from '@astrojs/cloudflare/handler';

type Env = {
  [key: string]: unknown;
  ASSETS: {
    fetch: (req: Request | string) => Promise<Response>;
  };
};

/**
 * Hosts that should never be indexed by search engines (preview/staging
 * deployments). The production custom domain is intentionally excluded.
 */
function isNonCanonicalHost(hostname: string): boolean {
  return hostname.endsWith('.workers.dev');
}

export default {
  async fetch(request, env, ctx) {
    const response = await handle(request, env, ctx);

    const { hostname } = new URL(request.url);
    if (isNonCanonicalHost(hostname)) {
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
} satisfies ExportedHandler<Env>;
