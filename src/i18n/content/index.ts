import type { Lang } from '../ui';
import type { SiteContent } from '../types';
import { en } from './en';
import { es } from './es';
import { ja } from './ja';
import { fr } from './fr';
import { de } from './de';
import { pt } from './pt';
import { ko } from './ko';
import { it } from './it';

export const content: Record<Lang, SiteContent> = {
  en,
  es,
  ja,
  fr,
  de,
  pt,
  ko,
  it,
};

/** Get the full translated content dictionary for a language. */
export function useContent(lang: Lang): SiteContent {
  return content[lang] ?? content.en;
}
