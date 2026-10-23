// Supported languages. English is the default and is served at the site root
// (e.g. "/"), while every other language is served under its own subpath
// (e.g. "/es/", "/ja/"). This keeps existing English URLs unchanged for SEO.
export const languages = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ko: '한국어',
  it: 'Italiano',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

// When false, the default language is not prefixed in the URL.
export const showDefaultLang = false;

// BCP-47 language tags used for the <html lang> attribute and hreflang links.
export const hreflangMap: Record<Lang, string> = {
  en: 'en',
  es: 'es',
  ja: 'ja',
  fr: 'fr',
  de: 'de',
  pt: 'pt',
  ko: 'ko',
  it: 'it',
};

// Open Graph locale tags (og:locale) per language.
export const ogLocaleMap: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_ES',
  ja: 'ja_JP',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_BR',
  ko: 'ko_KR',
  it: 'it_IT',
};
