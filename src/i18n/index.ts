/**
 * The site is Czech only (as bsicertifikace.cz is today). The language plumbing of the other Alture Astro sites
 * is kept so a second language can be added later: add the entry to LANGS, a key to the JSON files, and a route.
 */
export const LANGS = [{ code: 'cs', locale: 'cs-CZ', og: 'cs_CZ', name: 'Čeština', short: 'CS' }] as const;

export type Lang = (typeof LANGS)[number]['code'];

export function langInfo(lang: Lang) {
  return LANGS.find((l) => l.code === lang)!;
}

/** Texts of one dictionary file ({ cs: {...} }) for one language. Missing keys fall back to Czech. */
export function pick<T>(data: Record<string, T>, lang: Lang): T {
  return { ...data.cs, ...(data[lang] ?? {}) } as T;
}

/** Pages of the live site that this front page links to (registration and login stay on the live system). */
const LIVE = 'https://bsicertifikace.cz';
export const URLS = {
  registrace: `${LIVE}/registrace/`,
  prihlaseni: `${LIVE}/prihlaseni/`,
  bimpoint: 'http://bim-point.com',
  facebook: 'https://www.facebook.com/BimPoint.cz',
  linkedin: 'https://www.linkedin.com/company/bim.point',
} as const;

/** Contact data used in several places (contact section, footer, schema.org). */
export const FIRM = {
  name: 'Bim.Point',
  site: 'bSI certifikace',
  street: 'Koubkova 11',
  zip: '120 00',
  city: 'Praha 2',
  coordinator: 'Petra Vaňková',
  mail: 'koordinator@bsicertifikace.cz',
  phone: '+420 736 539 253',
  phoneHref: 'tel:+420736539253',
  office: '+420 221 590 945',
  officeHref: 'tel:+420221590945',
};
