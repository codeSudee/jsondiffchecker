import type { SiteContent } from '../types';

export const en: SiteContent = {
  meta: {
    homeTitle: 'JSON Diff Checker — Compare Two JSON Files in Your Browser',
    homeDescription:
      'Paste, upload, or load two JSON documents and see exactly what changed — added keys, removed keys, and modified values, highlighted in a collapsible tree. Runs entirely in your browser.',
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
        label: 'Client-side processing',
        body: 'Your JSON comparisons are processed entirely in your browser using JavaScript — nothing is sent to a server to compute the diff.',
      },
      {
        label: 'Safe for sensitive data',
        body: 'API responses, config files, tokens in test fixtures — paste with confidence. What happens in your browser stays in your browser.',
      },
    ],
  },
  about: {
    eyebrow: 'About the tool',
    heading: 'How this tool compares JSON',
    paragraphs: [
      'JSON Diff Checker compares two JSON documents key by key and value by value, not line by line as plain text. That means reordering keys inside an object — <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"a":1,"b":2}</code> versus <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">{"b":2,"a":1}</code> — never shows up as a false difference. Only additions, removals, and actual value changes are reported.',
      'Arrays are compared by position by default, since order often carries meaning (a sorted list, a priority queue, a sequence of steps). Turning on "Ignore array order" switches to identity-based matching instead: if array elements are objects that share a stable <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">id</code>, <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">uuid</code>, or <code class="rounded-sm bg-hairline-soft px-1.5 py-0.5 font-mono text-[13px]">key</code> field, they are matched by that field regardless of position; otherwise elements are matched by deep equality. This keeps reordered API results or config lists from generating noisy, meaningless diffs.',
      'Invalid input is caught immediately: the tool reports the exact line and column where JSON parsing failed, rather than a generic syntax error, so you can fix a missing comma or an unquoted key in seconds. Deeply nested or large documents render as a collapsible tree so the page stays readable instead of turning into a wall of text — and clicking any row copies its JSON Pointer (RFC 6901) path for pasting into a bug report or issue.',
      'Everything above runs with plain JavaScript in your browser tab. There is no backend that receives the JSON you paste, upload, or load from a URL — you can confirm this yourself by opening your browser\'s developer tools, switching to the Network tab, and watching for requests while you compare data.',
    ],
  },
  guide: {
    eyebrow: 'How to',
    heading: 'How to compare two JSON files',
    intro:
      'A walkthrough using a real config object — the same steps work for API responses, fixtures, or any JSON you need to compare.',
    steps: [
      {
        title: '1. Paste, upload, or load your first JSON',
        body: 'Paste the original document into the left editor. You can also click "Upload" to pick a .json file, or "URL" to fetch it directly from an API endpoint or a raw file URL.',
      },
      {
        title: '2. Paste the second version into the right editor',
        body: 'Add the updated JSON to the right side the same way. The diff updates automatically as you type or as soon as both sides are valid JSON — there is no separate "Compare" button to click.',
      },
      {
        title: '3. Read the highlighted tree',
        body: 'Added keys are marked with +, removed keys with −, and changed values show the old value struck through next to the new one. Use "Next" / "Prev" (or Enter / Shift+Enter) to jump between differences without scrolling by hand.',
      },
      {
        title: '4. Adjust array comparison if needed',
        body: 'If your JSON contains arrays that are logically the same but in a different order — a reordered list of tags, or API results that came back in a different sequence — enable "Ignore array order" so shuffled items aren\'t reported as changes.',
      },
      {
        title: '5. Export or share the result',
        body: 'Click any row to copy its JSON Pointer path. Use "Copy" or the download menu to get the diff as an RFC 6902 JSON Patch file, or as a Markdown changelog you can paste straight into a pull request.',
      },
    ],
    exampleHeading: 'A real example',
    exampleIntro:
      'Here are two versions of a small deployment config. The tool reports three differences: one changed value, one removed key, and one added array entry.',
    exampleLeftLabel: 'Original (v1.2.0)',
    exampleRightLabel: 'Updated (v1.3.0)',
    exampleLeftJson:
      '{\n  "service": "billing-api",\n  "version": "1.2.0",\n  "debug": true,\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1"]\n}',
    exampleRightJson:
      '{\n  "service": "billing-api",\n  "version": "1.3.0",\n  "replicas": 2,\n  "regions": ["us-east-1", "eu-west-1", "ap-south-1"]\n}',
    exampleRows: [
      { path: 'version', note: '"1.2.0" → "1.3.0" — reported as changed.', type: 'changed' },
      { path: 'debug', note: 'present in the original, missing from the update — reported as removed.', type: 'removed' },
      { path: 'regions[2]', note: '"ap-south-1" only exists on the right — reported as added.', type: 'added' },
    ],
    exampleOutro:
      '"service" and "replicas" are identical on both sides, so they render as plain, unhighlighted rows — the diff only draws attention to what actually changed. With "Ignore array order" off, the new region is treated as an appended array element rather than a reordering, since it was added at the end.',
  },
  useCases: {
    eyebrow: 'Use cases',
    heading: 'What developers use it for',
    intro: 'A few concrete situations where a structural JSON diff is faster than reading two files side by side.',
    items: [
      {
        title: 'Comparing API responses',
        body: 'Load the same endpoint\'s response from staging and production with "URL", or paste two saved responses, to check whether a schema change or a backend deploy altered the payload shape or values.',
      },
      {
        title: 'Reviewing configuration changes',
        body: 'Paste the config before and after an edit to see exactly which settings changed before you deploy — catching an accidental value change or a removed key that would otherwise slip through code review.',
      },
      {
        title: 'Debugging test fixtures',
        body: 'When a snapshot or fixture test fails, paste the expected and actual JSON to see precisely which field diverged instead of scanning a large assertion diff by eye.',
      },
      {
        title: 'Auditing deployment or infra changes',
        body: 'Compare exported Terraform state, Kubernetes manifests exported as JSON, or serverless function configs between two points in time to confirm only the intended fields changed.',
      },
      {
        title: 'Tracking down "should be identical" bugs',
        body: 'Two payloads that are supposed to match but produce different behavior almost always differ somewhere small — a null versus a missing key, a string versus a number. The diff surfaces that immediately.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Common questions',
    items: [
      {
        q: 'How do I compare two JSON files?',
        a: 'Paste the contents of each file into the left and right editors, or use "Upload" to pick a .json file for either side. The diff appears automatically once both sides contain valid JSON — no button to click.',
      },
      {
        q: 'Can I compare large or deeply nested JSON?',
        a: 'Yes. The diff renders as a collapsible tree, so nodes without changes stay collapsed and huge or deeply nested documents remain readable instead of producing a mile-long page. Actual performance depends on your browser and device, since everything runs locally.',
      },
      {
        q: 'How are added, removed, and changed values shown?',
        a: 'Added keys or array items are marked with + and a green background. Removed ones are marked with − and struck through. Changed values show the old value struck through next to the new value, marked with ~.',
      },
      {
        q: 'Does JSON key order matter?',
        a: 'No. Objects are compared by key name, not position, so { "a": 1, "b": 2 } and { "b": 2, "a": 1 } are treated as identical. Only array order is significant, and only when "Ignore array order" is off.',
      },
      {
        q: 'How are JSON arrays compared?',
        a: 'By default, arrays are compared position by position, so reordering elements is reported as a change. Turn on "Ignore array order" to compare by identity instead: objects sharing a stable id, uuid, or key field are matched by that field regardless of position, and everything else is matched by value.',
      },
      {
        q: 'What happens when the JSON is invalid?',
        a: 'The editor shows the exact line and column where parsing failed, along with a short error message, so you can fix a missing comma, unquoted key, or trailing comma immediately instead of guessing.',
      },
      {
        q: 'Can I load JSON from a URL?',
        a: 'Yes. Click "URL" on either editor, enter an http(s) address, and the tool fetches it directly from your browser. This only works if the server allows cross-origin requests (CORS); if it doesn\'t, download the file and use "Upload" instead.',
      },
      {
        q: 'Is my JSON uploaded to a server?',
        a: 'No. Parsing, validation, and comparison all happen in your browser with JavaScript. There is no backend that receives what you paste, upload, or load — open your browser\'s developer tools, check the Network tab, and compare data to confirm nothing is sent anywhere.',
      },
      {
        q: 'How does JSON Patch export work?',
        a: 'Click "Copy" or use the download menu to get the diff as a standards-compliant RFC 6902 JSON Patch: a JSON array of add, remove, and replace operations with the exact path and value for each difference, ready for automated tooling.',
      },
      {
        q: 'How can I export the differences as Markdown?',
        a: 'Open the download menu next to "Copy" and choose "Markdown changelog". You get a Markdown file listing every added, removed, and changed path with its values, ready to paste into a pull request description or changelog.',
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
          "Every comparison happens entirely client-side, in your browser. We do not operate a backend that receives the JSON you paste, and the JSON you compare is never sent to any third party. The Site is supported by Google AdSense advertising and uses Google Analytics for basic traffic statistics, as described in our Privacy Policy. You can verify that your JSON stays local by opening your browser's developer tools, going to the Network tab, and watching for requests while you use the tool.",
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
    updated: 'October 23, 2026',
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
          "We use your browser's local storage to remember your theme preference (light or dark mode); this stays on your device. Our advertising and analytics partners may also set cookies or use similar identifiers, as described in the next section.",
        ],
      },
      {
        heading: 'Analytics and advertising',
        body: [
          "We use Google Analytics to understand how the Site is used (for example, pages visited, approximate location, and device type) and Google AdSense to display advertisements. These Google services may use cookies and similar identifiers to measure usage and show ads.",
          "Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this Site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this Site and/or other sites on the Internet. You can opt out of personalized advertising in <a href=\"https://www.google.com/settings/ads\" rel=\"noopener noreferrer\" target=\"_blank\">Google Ads Settings</a> or at <a href=\"https://www.aboutads.info/choices/\" rel=\"noopener noreferrer\" target=\"_blank\">aboutads.info</a>. See also <a href=\"https://policies.google.com/technologies/partner-sites\" rel=\"noopener noreferrer\" target=\"_blank\">how Google uses information from sites that use its services</a>.",
          "The JSON you paste, upload, or load into the tool is processed only in your browser and is never sent to Google or any other third party by us.",
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
          'The Site is an independent tool and is not affiliated with, endorsed by, or sponsored by any other JSON comparison or diff service.',
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
