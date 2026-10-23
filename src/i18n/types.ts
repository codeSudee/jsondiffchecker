// Shared shape for all translated site content. Every language dictionary in
// src/i18n/content/ must satisfy `SiteContent` so the type checker guarantees
// no key is missing.

export interface NavContent {
  brand: string;
  brandShort: string;
  tool: string;
  features: string;
  privacy: string;
  faq: string;
  about: string;
  openTool: string;
  openMenu: string;
  closeMenu: string;
  toggleTheme: string;
  primaryNavLabel: string;
  secondaryNavLabel: string;
  languageLabel: string;
}

export interface HeroContent {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  aboutUs: string;
  contactUs: string;
  privacyPolicy: string;
  terms: string;
}

export interface ToolContent {
  eyebrow: string;
  heading: string;
  note: string;
}

export interface FeatureItem {
  title: string;
  body: string;
}

export interface FeaturesContent {
  eyebrow: string;
  heading: string;
  items: FeatureItem[];
}

export interface PrivacyPoint {
  label: string;
  body: string;
}

export interface PrivacySectionContent {
  eyebrow: string;
  heading: string;
  intro: string;
  points: PrivacyPoint[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  // Paragraphs may contain inline HTML (<strong>, <code>). They are authored
  // as trusted, hard-coded strings and rendered with set:html.
  paragraphs: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqContent {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
}

export interface EditorContent {
  originalLabel: string;
  updatedLabel: string;
  chars: string; // "chars" unit shown after the number
  format: string;
  formatTitle: string;
  upload: string;
  uploadTitle: string;
  url: string;
  urlTitle: string;
  clear: string;
  clearTitle: string;
  expandTitle: string;
  urlPlaceholder: string;
  load: string;
  cancel: string;
  editorPlaceholder: string;
}

export interface DiffPanelContent {
  resultLabel: string;
  added: string;
  removed: string;
  changed: string;
  ignoreArrayOrder: string;
  ignoreArrayOrderShort: string;
  ignoreArrayOrderTitle: string;
  prev: string;
  prevTitle: string;
  next: string;
  nextTitle: string;
  copy: string;
  copyTitle: string;
  download: string;
  downloadTitle: string;
  downloadPatch: string;
  downloadMarkdown: string;
  emptyState: string;
}

export interface FooterLink {
  label: string;
}

export interface FooterContent {
  tagline: string;
  productHeading: string;
  resourcesHeading: string;
  companyHeading: string;
  jsonDiffTool: string;
  features: string;
  privacy: string;
  faq: string;
  jsonPointerSpec: string;
  jsonPatchSpec: string;
  aboutUs: string;
  contactUs: string;
  privacyPolicy: string;
  terms: string;
  copyright: string; // may contain {year} placeholder
  notAffiliated: string;
}

export interface LegalSection {
  heading: string;
  // Body paragraphs; may contain inline HTML for links.
  body: string[];
}

export interface LegalPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  updated?: string;
  lastUpdatedLabel: string; // "Last updated:" label
  sections: LegalSection[];
}

export interface MetaContent {
  homeTitle: string;
  homeDescription: string;
}

export interface SiteContent {
  meta: MetaContent;
  nav: NavContent;
  hero: HeroContent;
  tool: ToolContent;
  features: FeaturesContent;
  privacy: PrivacySectionContent;
  about: AboutContent;
  faq: FaqContent;
  editor: EditorContent;
  diffPanel: DiffPanelContent;
  footer: FooterContent;
  about_us: LegalPage;
  contact_us: LegalPage & { email: string };
  privacy_policy: LegalPage;
  terms: LegalPage;
}
