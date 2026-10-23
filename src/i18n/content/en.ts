import type { SiteContent } from '../types';

export const en: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Compare JSON Online Free | JSON Diff Tool',
    homeDescription:
      'Free JSON diff checker to compare two JSON files or objects online. Highlights added, removed, and changed keys instantly — no upload, no sign-up, 100% private in your browser.',
  },
  nav: {
    brand: 'JSON Diff Checker',
    brandShort: 'JSON Diff',
    tool: 'Tool',
    features: 'Features',
    privacy: 'Privacy',
    faq: 'FAQ',
    about: 'About',
    openTool: 'Open the tool',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle dark mode',
    primaryNavLabel: 'Primary',
    secondaryNavLabel: 'Secondary',
    languageLabel: 'Language',
  },
  hero: {
    badge: '100% client-side · no data ever leaves your browser',
    titleLine1: 'Compare JSON.',
    titleLine2: 'See every difference instantly.',
    subtitle:
      'Paste, upload, or load two JSON documents and get a precise, color-coded diff — added keys, removed keys, and changed values — without a single byte leaving your machine.',
    ctaPrimary: 'Start comparing',
    ctaSecondary: "See what's different",
    aboutUs: 'About us',
    contactUs: 'Contact us',
    privacyPolicy: 'Privacy policy',
    terms: 'Terms and conditions',
  },
  tool: {
    eyebrow: 'The tool',
    heading: 'Paste your JSON on both sides to compare',
    note: 'Runs entirely in this tab — nothing is uploaded.',
  },
  features: {
    eyebrow: 'Features',
    heading: "Everything you need, nothing you don't",
    items: [
      {
        title: 'Line-accurate error messages',
        body: 'Invalid JSON? You get the exact line and column, not a vague failure. Fix mistakes in seconds instead of hunting through minified text.',
      },
      {
        title: 'Upload, paste, or load from a URL',
        body: 'Drop in a .json file, paste raw text, or pull a document straight from an API endpoint — whichever is fastest for your workflow.',
      },
      {
        title: 'Diff summary & keyboard navigation',
        body: 'See counts of added, removed, and changed keys at a glance, then jump between them with Enter / Shift+Enter without touching the mouse.',
      },
      {
        title: 'Deeply nested, without breaking layout',
        body: 'Collapsible tree nodes keep huge, deeply nested payloads readable instead of producing a mile-long unreadable page.',
      },
      {
        title: 'Copy a path, not just a value',
        body: 'Click any diff row to copy its JSON Pointer path — perfect for pasting into bug reports or tracking down the field in your codebase.',
      },
      {
        title: 'Export as JSON Patch or Markdown',
        body: 'Download the diff as a standard RFC 6902 JSON Patch for tooling, or as a clean Markdown changelog for pull requests and docs.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy by design',
    heading: 'Your data never leaves your machine',
    intro:
      'Many "online" JSON tools quietly ship your data to a server to process it. This one doesn\'t — there\'s no backend to send it to. Everything happens client-side, in memory, in your tab.',
    points: [
      {
        label: 'No server round-trip',
        body: 'Parsing, validation, and diffing all run in your browser with plain JavaScript. Your JSON is never transmitted anywhere.',
      },
      {
        label: 'No analytics, no ad scripts',
        body: "This page loads no third-party trackers or ad tags — check your browser's network tab and you'll see nothing beyond the page itself.",
      },
      {
        label: 'Safe for sensitive data',
        body: 'API responses, config files, tokens in test fixtures — paste with confidence. What happens in your browser stays in your browser.',
      },
    ],
  },
  about: {
    eyebrow: 'About the tool',
    heading: 'A free JSON diff checker built for speed and privacy',
    paragraphs: [
      'JSON Diff Checker is a free <strong class="text-ink">JSON diff checker online</strong> that lets you compare two JSON files or objects and instantly see what changed. Paste your data, upload files, or load JSON straight from a URL, and this <strong class="text-ink">json diff tool</strong> highlights every added key, removed key, and changed value in a clean, color-coded tree — no installation, no account, and no data ever leaving your browser.',
      'Most teams need to <strong class="text-ink">compare json online</strong> at some point — checking an API response against a fixture, reviewing a config change before a deploy, or tracking down why two payloads that "should" be identical actually aren\'t. Doing this by eye in a text editor is slow and error-prone, especially with deeply nested objects or large arrays. This <strong class="text-ink">json comparison tool</strong> does the matching for you: keys are compared semantically rather than as raw text, so reordering keys inside an object never produces a false difference. If you need to <strong class="text-ink">compare two json files</strong> that only differ in formatting or key order, the diff stays focused on changes that actually matter.',
      'Arrays get the same careful treatment. By default, order matters — comparing <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["a","b"]</code> against <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">["b","a"]</code> is reported as a change, since sequence often carries real meaning. But when you just need to <strong class="text-ink">compare json objects online</strong> without caring about array order, flip on "Ignore array order" and the tool matches array elements by an id/key field when one exists, or by value otherwise — so shuffled lists no longer show as noisy false positives. That makes this <strong class="text-ink">json diff viewer</strong> reliable for real-world API responses, where array ordering is frequently inconsistent between requests.',
      'As a <strong class="text-ink">free json diff checker</strong>, there\'s no paywall, no usage limit, and no watermark on exported results. Unlike many "free" tools online that quietly send your data to a server for processing, everything here runs client-side with plain JavaScript — open your browser\'s developer tools and watch the Network tab while you compare data, and you\'ll see nothing leave the page. That makes it safe to use as a <strong class="text-ink">json diff checker online free</strong> even with sensitive payloads: API tokens in test fixtures, internal config, or customer data you\'d never want touching a third-party server.',
      'Beyond a basic <strong class="text-ink">json compare tool</strong>, this app is built to handle real production use cases. Invalid input doesn\'t just fail silently — you get the exact line and column where parsing broke, so fixing a missing comma or an unquoted key takes seconds instead of a manual scan through minified text. When you need to <strong class="text-ink">compare json files online</strong> that are large or deeply nested, the diff renders as a collapsible tree so the page stays readable and responsive instead of turning into a mile-long wall of text. Keyboard shortcuts let you jump between differences with Enter and Shift+Enter, and clicking any row copies its JSON Pointer path for pasting straight into a bug report or pull request.',
      'This is also a practical <strong class="text-ink">json diff generator</strong> for documentation and code review workflows. Once you\'ve found the differences, export them instead of just reading them: copy the result as a standards-compliant JSON Patch (RFC 6902) for automated tooling, or download a clean Markdown changelog that\'s ready to drop into a pull request description. Combined with support for loading JSON directly from a URL, it works as a lightweight <strong class="text-ink">online json comparison</strong> and <strong class="text-ink">json diff and merge tool</strong> for checking two live endpoints against each other without downloading anything first.',
      'Whether you need to <strong class="text-ink">compare json data</strong> for a one-off debugging session or you reach for a <strong class="text-ink">json difference checker</strong> regularly as part of your development workflow, this tool is designed to be fast to open, obvious to use, and safe by default — every comparison happens locally, every time, for free.',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Common questions',
    items: [
      {
        q: 'Is my JSON data uploaded anywhere?',
        a: "No. All parsing, validation, and comparison happens in your browser using JavaScript. There is no backend that receives your JSON — you can verify this yourself by opening your browser's developer tools, going to the Network tab, and watching for requests while you compare data.",
      },
      {
        q: 'Does it matter if key order is different?',
        a: 'No. The comparison is semantic rather than textual — keys are matched by name regardless of order, so { "a": 1, "b": 2 } and { "b": 2, "a": 1 } are treated as identical.',
      },
      {
        q: 'Can I compare JSON files with different array orders?',
        a: 'Yes. By default, array order matters — comparing ["a","b"] with ["b","a"] shows both entries as changed, since order often carries meaning (e.g. sorted lists). Turn on "Ignore array order" above the diff result to compare arrays by value instead: elements are matched by an id/uuid/key field when objects have one, or by value otherwise, so reordering alone is no longer reported — only elements that were genuinely added, removed, or actually changed.',
      },
      {
        q: 'What happens if my JSON is invalid?',
        a: "You'll see a clear error message with the exact line and column where parsing failed, so you can fix syntax errors like missing commas, unquoted keys, or trailing commas immediately.",
      },
      {
        q: 'How large a file can I compare?',
        a: 'Performance depends on your browser and device, since everything runs locally. The tool is built to stay responsive with deeply nested and large documents by rendering the diff tree with collapsible nodes.',
      },
      {
        q: 'Can I download or share the result?',
        a: 'Yes. You can copy the diff as a JSON Patch (RFC 6902) or download it as a JSON Patch file or a human-readable Markdown changelog — useful for pull requests, bug reports, or documentation.',
      },
      {
        q: 'How to check if JSON is correct?',
        a: "Paste your JSON into either editor on this page — it is validated as you type. If the JSON is invalid, you'll see an error message with the exact line and column of the problem (e.g. a missing comma, unquoted key, or trailing comma). If it parses cleanly, it's valid JSON.",
      },
      {
        q: 'Is Diffchecker free to use?',
        a: 'This JSON diff checker is completely free to use, with no sign-up, no usage limits, and no data uploaded to a server — comparisons run entirely in your browser. (Diffchecker.com is a separate, third-party service; we are not affiliated with it.)',
      },
      {
        q: 'How to check the difference between two JSON files?',
        a: 'Open each file\'s contents and paste them into the left and right editors above, then click Compare (or let it diff automatically). Added, removed, and changed keys are highlighted line by line, and you can enable "Ignore array order" if array ordering shouldn\'t count as a difference.',
      },
      {
        q: 'How do I use jsondiff in Python?',
        a: 'In Python, the popular option is the `jsondiff` package: install it with `pip install jsondiff`, then call `jsondiff.diff(a, b)` where `a` and `b` are parsed JSON objects (dicts). It returns a dict describing what changed. This is useful for scripting or CI checks — for quick, visual, one-off comparisons without writing code, use the tool on this page instead.',
      },
      {
        q: 'What is the difference between two JSON files called?',
        a: 'It\'s commonly called a "JSON diff" or "JSON delta" — a structured description of what was added, removed, or changed between two JSON documents. A standardized format for expressing it is JSON Patch (RFC 6902), which this tool can generate for you.',
      },
      {
        q: 'How do I compare two JSON objects?',
        a: 'Paste one object into each editor above. The comparison is done key by key (not as plain text), so objects are considered equal if they have the same keys and values regardless of key order, while any added, removed, or changed values are highlighted.',
      },
      {
        q: 'Can you diff JSON files?',
        a: 'Yes — paste the contents of both files into the two editors on this page and the differences are highlighted instantly. Everything runs client-side in your browser, so no file is uploaded anywhere.',
      },
      {
        q: 'How do you check if two JSON objects are the same?',
        a: 'Compare them with this tool: if the diff view shows no added, removed, or changed entries, the objects are equivalent. Two JSON objects are considered the same when they contain the same keys and values, even if the keys appear in a different order — only array order matters unless you enable "Ignore array order".',
      },
    ],
  },
  editor: {
    originalLabel: 'Original JSON',
    updatedLabel: 'Updated JSON',
    chars: 'chars',
    format: 'Format',
    formatTitle: 'Pretty-print',
    upload: 'Upload',
    uploadTitle: 'Upload a .json file',
    url: 'URL',
    urlTitle: 'Load JSON from a URL',
    clear: 'Clear',
    clearTitle: 'Clear',
    expandTitle: 'Expand editor',
    urlPlaceholder: 'https://example.com/data.json',
    load: 'Load',
    cancel: 'Cancel',
    editorPlaceholder: '{\n  "paste": "your JSON here"\n}',
  },
  diffPanel: {
    resultLabel: 'Diff result',
    added: 'added',
    removed: 'removed',
    changed: 'changed',
    ignoreArrayOrder: 'Ignore array order',
    ignoreArrayOrderShort: 'Ignore order',
    ignoreArrayOrderTitle: 'Match array elements by value/identity instead of position',
    prev: 'Prev',
    prevTitle: 'Previous difference (Shift+Enter)',
    next: 'Next',
    nextTitle: 'Next difference (Enter)',
    copy: 'Copy',
    copyTitle: 'Copy diff as JSON Patch',
    download: 'Download',
    downloadTitle: 'Download diff',
    downloadPatch: 'JSON Patch (.json)',
    downloadMarkdown: 'Markdown changelog (.md)',
    emptyState: 'Paste or load JSON into both panes above to see the diff here.',
  },
  footer: {
    tagline:
      'A free, private, browser-only JSON comparison tool. Nothing you paste is ever sent anywhere.',
    productHeading: 'Product',
    resourcesHeading: 'Resources',
    companyHeading: 'Company',
    jsonDiffTool: 'JSON diff tool',
    features: 'Features',
    privacy: 'Privacy',
    faq: 'FAQ',
    jsonPointerSpec: 'JSON Pointer spec',
    jsonPatchSpec: 'JSON Patch spec',
    aboutUs: 'About us',
    contactUs: 'Contact us',
    privacyPolicy: 'Privacy policy',
    terms: 'Terms and conditions',
    copyright: '© {year} JSON Diff Checker. All processing happens locally in your browser.',
    notAffiliated: 'Not affiliated with json-diff.com.',
  },
  about_us: {
    metaTitle: 'About Us | JSON Diff Checker',
    metaDescription:
      'Learn about JSON Diff Checker — a free, privacy-first JSON comparison tool that runs entirely in your browser with no uploads, sign-up, or tracking.',
    eyebrow: 'About us',
    heading: 'About JSON Diff Checker',
    lastUpdatedLabel: 'Last updated:',
    sections: [
      {
        heading: 'Who we are',
        body: [
          'JSON Diff Checker is an independent, free-to-use web tool built for developers, QA engineers, and anyone who needs to quickly compare two pieces of JSON. We built it because most "online JSON diff" tools either upload your data to a server, bury the comparison behind ads and sign-up walls, or struggle with large, deeply nested documents.',
        ],
      },
      {
        heading: 'What we do',
        body: [
          'Our tool lets you paste, upload, or load JSON from a URL and instantly see a structured, color-coded diff of what was added, removed, or changed — down to the exact key or array element. Comparisons are semantic rather than textual, so differences in key order or formatting never produce false positives. You can export results as a JSON Patch (RFC 6902) file or a Markdown changelog for pull requests and documentation.',
        ],
      },
      {
        heading: 'Our approach to privacy',
        body: [
          "Every comparison happens entirely client-side, in your browser. We do not operate a backend that receives the JSON you paste, and we do not use tracking scripts or ad tags. You can verify this yourself by opening your browser's developer tools, going to the Network tab, and watching for requests while you use the tool.",
        ],
      },
      {
        heading: 'Contact',
        body: [
          'Have feedback, found a bug, or want to suggest a feature? Visit our <a href="{contactUrl}">Contact Us</a> page to get in touch.',
        ],
      },
    ],
  },
  contact_us: {
    metaTitle: 'Contact Us | JSON Diff Checker',
    metaDescription:
      'Get in touch with the JSON Diff Checker team for feedback, bug reports, or feature requests.',
    eyebrow: 'Contact us',
    heading: 'Contact Us',
    email: 'support@jsondiffchecker.com',
    lastUpdatedLabel: 'Last updated:',
    sections: [
      {
        heading: '',
        body: [
          "We'd love to hear from you — whether it's a bug report, a feature request, or general feedback about JSON Diff Checker.",
        ],
      },
      {
        heading: 'Email',
        body: [
          'The fastest way to reach us is by email at <a href="mailto:{email}">{email}</a>. We generally respond within a few business days.',
        ],
      },
      {
        heading: 'Reporting a bug',
        body: [
          "If you've found a bug, it helps to include the JSON you were comparing (or a minimal example that reproduces the issue), the browser and OS you're using, and a description of what you expected to happen versus what actually happened.",
        ],
      },
      {
        heading: 'Feature requests',
        body: [
          "Have an idea for a feature that would make comparing JSON easier? Send it our way — we read every suggestion, even if we can't respond to or implement all of them.",
        ],
      },
    ],
  },
  privacy_policy: {
    metaTitle: 'Privacy Policy | JSON Diff Checker',
    metaDescription:
      'Privacy Policy for JSON Diff Checker. All JSON comparison happens locally in your browser — we do not upload, store, or transmit the data you paste.',
    eyebrow: 'Privacy policy',
    heading: 'Privacy Policy',
    updated: 'September 6, 2026',
    lastUpdatedLabel: 'Last updated:',
    sections: [
      {
        heading: 'Overview',
        body: [
          'This Privacy Policy explains how JSON Diff Checker ("we", "our", "the tool") handles information when you use jsondiffchecker.com (the "Site"). We built this tool around a simple principle: the JSON data you compare is yours, and it never leaves your device.',
        ],
      },
      {
        heading: 'Data you paste or upload',
        body: [
          'All parsing, validation, and comparison of JSON happens locally in your browser using client-side JavaScript. We do not have a backend server that receives, stores, logs, or processes the content you paste, upload, or load into the tool. If you load JSON from a URL you provide, that request is made directly from your browser to the URL you specify — we do not proxy or intercept it.',
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: [
          "We use your browser's local storage only to remember your theme preference (light or dark mode). This information stays on your device and is not transmitted to us or any third party.",
        ],
      },
      {
        heading: 'Analytics and advertising',
        body: [
          "The Site does not load third-party analytics scripts, advertising tags, or tracking pixels. You can verify this by opening your browser's developer tools and inspecting the Network tab while using the tool.",
        ],
      },
      {
        heading: 'Third-party links',
        body: [
          'The Site may link to third-party resources, such as RFC specifications. We are not responsible for the privacy practices of external websites, and we encourage you to review their respective privacy policies.',
        ],
      },
      {
        heading: "Children's privacy",
        body: [
          'The Site is not directed at children under 13, and we do not knowingly collect personal information from children.',
        ],
      },
      {
        heading: 'Changes to this policy',
        body: [
          'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date above.',
        ],
      },
      {
        heading: 'Contact us',
        body: [
          'If you have questions about this Privacy Policy, please visit our <a href="{contactUrl}">Contact Us</a> page.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Terms and Conditions | JSON Diff Checker',
    metaDescription:
      'Terms and Conditions for using JSON Diff Checker, a free browser-based JSON comparison tool provided as-is with no warranty.',
    eyebrow: 'Terms and conditions',
    heading: 'Terms and Conditions',
    updated: 'September 6, 2026',
    lastUpdatedLabel: 'Last updated:',
    sections: [
      {
        heading: 'Acceptance of terms',
        body: [
          'By accessing or using jsondiffchecker.com (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Site.',
        ],
      },
      {
        heading: 'Description of service',
        body: [
          'JSON Diff Checker provides a free, browser-based tool for comparing two JSON documents and viewing the differences between them. All processing occurs locally in your browser; the Site does not require an account or subscription.',
        ],
      },
      {
        heading: 'Use of the service',
        body: [
          'You agree to use the Site only for lawful purposes. You are solely responsible for the content you paste, upload, or load into the tool, and for ensuring you have the right to use and compare that content.',
        ],
      },
      {
        heading: 'No warranty',
        body: [
          'The Site and its tool are provided "as is" and "as available", without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. While we aim for the comparison logic to be correct, we do not guarantee that results will be error-free or uninterrupted.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'To the fullest extent permitted by law, JSON Diff Checker and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          "The Site's design, branding, and underlying code are the property of JSON Diff Checker unless otherwise noted. You retain full ownership of any JSON data you process using the tool.",
        ],
      },
      {
        heading: 'Third-party references',
        body: [
          'The Site is not affiliated with, endorsed by, or sponsored by any third-party service, including similarly named tools such as Diffchecker.com or json-diff.com.',
        ],
      },
      {
        heading: 'Changes to these terms',
        body: [
          'We may revise these Terms and Conditions at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.',
        ],
      },
      {
        heading: 'Contact us',
        body: [
          'Questions about these Terms and Conditions can be sent to us via our <a href="{contactUrl}">Contact Us</a> page.',
        ],
      },
    ],
  },
};
