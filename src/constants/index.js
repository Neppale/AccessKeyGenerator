export const FEDERAL_UNITS = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
    "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
];
export var FederalUnitCode;
(function (FederalUnitCode) {
    FederalUnitCode[FederalUnitCode["AC"] = 12] = "AC";
    FederalUnitCode[FederalUnitCode["AL"] = 27] = "AL";
    FederalUnitCode[FederalUnitCode["AM"] = 13] = "AM";
    FederalUnitCode[FederalUnitCode["AP"] = 16] = "AP";
    FederalUnitCode[FederalUnitCode["BA"] = 29] = "BA";
    FederalUnitCode[FederalUnitCode["CE"] = 23] = "CE";
    FederalUnitCode[FederalUnitCode["DF"] = 53] = "DF";
    FederalUnitCode[FederalUnitCode["ES"] = 32] = "ES";
    FederalUnitCode[FederalUnitCode["GO"] = 52] = "GO";
    FederalUnitCode[FederalUnitCode["MA"] = 21] = "MA";
    FederalUnitCode[FederalUnitCode["MG"] = 31] = "MG";
    FederalUnitCode[FederalUnitCode["MS"] = 50] = "MS";
    FederalUnitCode[FederalUnitCode["MT"] = 51] = "MT";
    FederalUnitCode[FederalUnitCode["PA"] = 15] = "PA";
    FederalUnitCode[FederalUnitCode["PB"] = 25] = "PB";
    FederalUnitCode[FederalUnitCode["PE"] = 26] = "PE";
    FederalUnitCode[FederalUnitCode["PI"] = 22] = "PI";
    FederalUnitCode[FederalUnitCode["PR"] = 41] = "PR";
    FederalUnitCode[FederalUnitCode["RJ"] = 33] = "RJ";
    FederalUnitCode[FederalUnitCode["RN"] = 24] = "RN";
    FederalUnitCode[FederalUnitCode["RO"] = 11] = "RO";
    FederalUnitCode[FederalUnitCode["RR"] = 14] = "RR";
    FederalUnitCode[FederalUnitCode["RS"] = 43] = "RS";
    FederalUnitCode[FederalUnitCode["SC"] = 42] = "SC";
    FederalUnitCode[FederalUnitCode["SE"] = 28] = "SE";
    FederalUnitCode[FederalUnitCode["SP"] = 35] = "SP";
    FederalUnitCode[FederalUnitCode["TO"] = 17] = "TO";
})(FederalUnitCode || (FederalUnitCode = {}));
export const DOCUMENT_MODELS = ["NF-e", "NFC-e"];
export var ModelCode;
(function (ModelCode) {
    ModelCode[ModelCode["NF-e"] = 55] = "NF-e";
    ModelCode[ModelCode["NFC-e"] = 65] = "NFC-e";
})(ModelCode || (ModelCode = {}));
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
];
export var EmissionTypeCode;
(function (EmissionTypeCode) {
    EmissionTypeCode[EmissionTypeCode["Normal"] = 1] = "Normal";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia FS-IA"] = 2] = "Conting\u00EAncia FS-IA";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia SCAN"] = 3] = "Conting\u00EAncia SCAN";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia DPEC"] = 4] = "Conting\u00EAncia DPEC";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia FS-DA"] = 5] = "Conting\u00EAncia FS-DA";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia SVC-AN"] = 6] = "Conting\u00EAncia SVC-AN";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia SVC-RS"] = 7] = "Conting\u00EAncia SVC-RS";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia off-line NFC-e"] = 9] = "Conting\u00EAncia off-line NFC-e";
    EmissionTypeCode[EmissionTypeCode["Conting\u00EAncia EPEC"] = 10] = "Conting\u00EAncia EPEC";
})(EmissionTypeCode || (EmissionTypeCode = {}));
