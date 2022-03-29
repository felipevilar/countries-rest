export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, BRL>;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface NativeInfo {
  official: string;
  common: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: Record<string, NativeInfo>
}

interface BRL {
  name: string;
  symbol: string;
}

interface Currencies {
  BRL: BRL;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Languages {
  name: string;
}

interface TranslationDetail {
  official: string;
  common: string;
}

interface Translations {
  ara: TranslationDetail;
  ces: TranslationDetail;
  cym: TranslationDetail;
  deu: TranslationDetail;
  est: TranslationDetail;
  fin: TranslationDetail;
  fra: TranslationDetail;
  hrv: TranslationDetail;
  hun: TranslationDetail;
  ita: TranslationDetail;
  jpn: TranslationDetail;
  kor: TranslationDetail;
  nld: TranslationDetail;
  per: TranslationDetail;
  pol: TranslationDetail;
  por: TranslationDetail;
  rus: TranslationDetail;
  slk: TranslationDetail;
  spa: TranslationDetail;
  swe: TranslationDetail;
  urd: TranslationDetail;
  zho: TranslationDetail;
}

interface DemonymsInfo {
  f: string;
  m: string;
}

interface Demonyms {
  'eng': DemonymsInfo,
  'fra': DemonymsInfo
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Gini {
  2019: number;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}
