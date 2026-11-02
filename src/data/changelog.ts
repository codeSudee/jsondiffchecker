/**
 * Public changelog. Entries mirror real changes from the git history, newest
 * first. The first entry's date drives the "Last updated" label on the
 * homepage, so add a new entry here whenever the site or tool changes.
 */
export interface ChangelogEntry {
  /** ISO date (YYYY-MM-DD) */
  date: string;
  title: string;
  changes: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    date: '2026-11-02',
    title: 'Common JSON errors guide and changelog',
    changes: [
      'Added a "Common JSON errors" guide to the homepage covering trailing commas, unquoted keys, type mismatches, null versus missing keys, and reordered arrays, each with a before/after example.',
      'Added this changelog and a "Last updated" date on the homepage.',
    ],
  },
  {
    date: '2026-10-23',
    title: 'Crawler access, structured data and policy updates',
    changes: [
      'Added llms.txt describing the site for AI assistants, and explicitly allowed the Google AdSense crawler in robots.txt.',
      'Added Organization, WebSite and breadcrumb structured data, and a 1200x630 social preview image.',
      'Updated the Privacy Policy and About page to disclose the use of Google AdSense and Google Analytics.',
      'Added a step-by-step "How to compare two JSON files" guide with a worked example, and a "Use cases" section.',
      'Launched localized versions of the site in Spanish, French, German, Italian, Portuguese, Japanese and Korean, with hreflang annotations.',
    ],
  },
  {
    date: '2026-09-07',
    title: 'Initial release',
    changes: [
      'Released the JSON diff tool: paste, upload, or load JSON from a URL and see added, removed and changed values in a collapsible tree with line and column error reporting.',
      'Added the "Ignore array order" option, JSON Pointer (RFC 6901) path copying, and export as RFC 6902 JSON Patch or a Markdown changelog.',
      'Added About, Contact, Privacy Policy and Terms pages, a sitemap and robots.txt.',
    ],
  },
];

export const lastUpdated = changelog[0].date;
