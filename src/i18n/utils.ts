import { languages, defaultLang, showDefaultLang, type Lang } from './ui';

/**
 * Detect the current language from a URL. Falls back to the default language
 * when the first path segment is not a supported language code.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

/**
 * Return a helper that prefixes a path with the given language, unless it is
 * the default language and `showDefaultLang` is false.
 *
 * `translatePath('/about-us/')` -> '/about-us/' for en, '/es/about-us/' for es
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    const clean = path.startsWith('/') ? path : `/${path}`;
    return !showDefaultLang && l === defaultLang ? clean : `/${l}${clean}`;
  };
}

/**
 * Strip the language prefix from a pathname, returning the "logical" path that
 * is shared across all languages (always starting with '/').
 *
 * '/es/about-us/' -> '/about-us/'
 * '/about-us/'    -> '/about-us/'
 * '/es/'          -> '/'
 * '/'             -> '/'
 */
export function getPathWithoutLang(url: URL): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts.length > 0 && parts[0] in languages) {
    parts.shift();
  }
  const path = '/' + parts.join('/');
  // Preserve trailing slash semantics from the original pathname.
  if (url.pathname.endsWith('/') && !path.endsWith('/')) {
    return path === '/' ? '/' : `${path}/`;
  }
  return path;
}
