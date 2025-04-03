export const FEDERAL_UNITS = [
  "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
  "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
] as const;

export enum FederalUnitCode {
  AC = 12, AL = 27, AM = 13, AP = 16, BA = 29, CE = 23, DF = 53, ES = 32,
  GO = 52, MA = 21, MG = 31, MS = 50, MT = 51, PA = 15, PB = 25, PE = 26,
  PI = 22, PR = 41, RJ = 33, RN = 24, RO = 11, RR = 14, RS = 43, SC = 42,
  SE = 28, SP = 35, TO = 17
}

export const DOCUMENT_MODELS = ["NF-e", "NFC-e"] as const;

export enum ModelCode {
  "NF-e" = 55,
  "NFC-e" = 65
}

export const EMISSION_TYPES = [
  "Normal",
  "Contingência FS-IA",
  "Contingência SCAN",
  "Contingência DPEC",
  "Contingência FS-DA",
  "Contingência SVC-AN",
  "Contingência SVC-RS",
  "Contingência off-line NFC-e",
  "Contingência EPEC"
] as const;

export enum EmissionTypeCode {
  "Normal" = 1,
  "Contingência FS-IA" = 2,
  "Contingência SCAN" = 3,
  "Contingência DPEC" = 4,
  "Contingência FS-DA" = 5,
  "Contingência SVC-AN" = 6,
  "Contingência SVC-RS" = 7,
  "Contingência off-line NFC-e" = 9,
  "Contingência EPEC" = 10
} 