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

export type sdfsd = "TESTE"
export type cc = 
  'ABW' |
  'AFG' |
  'AGO' |
  'AIA' |
  'ALA' |
  'ALB' |
  'AND' |
  'ANT' |
  'ARE' |
  'ARG' |
  'ARM' |
  'ASM' |
  'ATA' |
  'ATF' |
  'ATG' |
  'AUS' |
  'AUT' |
  'AZE' |
  'BDI' |
  'BEL' |
  'BEN' |
  'BFA' |
  'BGD' |
  'BGR' |
  'BHR' |
  'BHS' |
  'BIH' |
  'BLM' |
  'BLR' |
  'BLZ' |
  'BMU' |
  'BOL' |
  'BRA' |
  'BRB' |
  'BRN' |
  'BTN' |
  'BVT' |
  'BWA' |
  'CAF' |
  'CAN' |
  'CCK' |
  'CHE' |
  'CHL' |
  'CHN' |
  'CIV' |
  'CMR' |
  'COD' |
  'COG' |
  'COK' |
  'COL' |
  'COM' |
  'CPV' |
  'CRI' |
  'CUB' |
  'CUW' |
  'CXR' |
  'CYM' |
  'CYP' |
  'CZE' |
  'DEU' |
  'DJI' |
  'DMA' |
  'DNK' |
  'DOM' |
  'DZA' |
  'ECU' |
  'EGY' |
  'ERI' |
  'ESH' |
  'ESP' |
  'EST' |
  'ETH' |
  'FIN' |
  'FJI' |
  'FLK' |
  'FRA' |
  'FRO' |
  'FSM' |
  'GAB' |
  'GBR' |
  'GEO' |
  'GGY' |
  'GHA' |
  'GIB' |
  'GIN' |
  'GLP' |
  'GMB' |
  'GNB' |
  'GNQ' |
  'GRC' |
  'GRD' |
  'GRL' |
  'GTM' |
  'GUF' |
  'GUM' |
  'GUY' |
  'HKG' |
  'HMD' |
  'HND' |
  'HRV' |
  'HTI' |
  'HUN' |
  'IDN' |
  'IMN' |
  'IND' |
  'IOT' |
  'IRL' |
  'IRN' |
  'IRQ' |
  'ISL' |
  'ISR' |
  'ITA' |
  'JAM' |
  'JEY' |
  'JOR' |
  'JPN' |
  'KAZ' |
  'KEN' |
  'KGZ' |
  'KHM' |
  'KIR' |
  'KNA' |
  'KOR' |
  'KWT' |
  'LAO' |
  'LBN' |
  'LBR' |
  'LBY' |
  'LCA' |
  'LIE' |
  'LKA' |
  'LSO' |
  'LTU' |
  'LUX' |
  'LVA' |
  'MAC' |
  'MAF' |
  'MAR' |
  'MCO' |
  'MDA' |
  'MDG' |
  'MDV' |
  'MEX' |
  'MHL' |
  'MKD' |
  'MLI' |
  'MLT' |
  'MMR' |
  'MNE' |
  'MNG' |
  'MNP' |
  'MOZ' |
  'MRT' |
  'MSR' |
  'MTQ' |
  'MUS' |
  'MWI' |
  'MYS' |
  'MYT' |
  'NAM' |
  'NCL' |
  'NER' |
  'NFK' |
  'NGA' |
  'NIC' |
  'NIU' |
  'NLD' |
  'NOR' |
  'NPL' |
  'NRU' |
  'NZL' |
  'OMN' |
  'PAK' |
  'PAN' |
  'PCN' |
  'PER' |
  'PHL' |
  'PLW' |
  'PNG' |
  'POL' |
  'PRI' |
  'PRK' |
  'PRT' |
  'PRY' |
  'PSE' |
  'PSL' |
  'PYF' |
  'QAT' |
  'REU' |
  'ROU' |
  'RUS' |
  'RWA' |
  'SAU' |
  'SDN' |
  'SEN' |
  'SGP' |
  'SGS' |
  'SHN' |
  'SJM' |
  'SLB' |
  'SLE' |
  'SLV' |
  'SMR' |
  'SOM' |
  'SPM' |
  'SRB' |
  'STP' |
  'SUR' |
  'SVK' |
  'SVN' |
  'SWE' |
  'SWZ' |
  'SYC' |
  'SYR' |
  'TCA' |
  'TCD' |
  'TGO' |
  'THA' |
  'TJK' |
  'TKL' |
  'TKM' |
  'TLS' |
  'TON' |
  'TTO' |
  'TUN' |
  'TUR' |
  'TUV' |
  'TWN' |
  'TZA' |
  'UGA' |
  'UKR' |
  'UMI' |
  'URY' |
  'USA' |
  'UZB' |
  'VAT' |
  'VCT' |
  'VEN' |
  'VGB' |
  'VIR' |
  'VNM' |
  'VUT' |
  'WLF' |
  'WSM' |
  'YEM' |
  'ZAF' |
  'ZMB' |
  'ZWE'
