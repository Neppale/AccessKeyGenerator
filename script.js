document.addEventListener("DOMContentLoaded", function () {
    // Preencher o seletor de Unidade Federal (federalUnit)
    var federalUnitSelector = document.getElementById("federalUnit");
    var federalUnitList = [
        "AC",
        "AL",
        "AM",
        "AP",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MG",
        "MS",
        "MT",
        "PA",
        "PB",
        "PE",
        "PI",
        "PR",
        "RJ",
        "RN",
        "RO",
        "RR",
        "RS",
        "SC",
        "SE",
        "SP",
        "TO",
    ];
    var federalUnitCode;
    (function (federalUnitCode) {
        federalUnitCode[federalUnitCode["AC"] = 12] = "AC";
        federalUnitCode[federalUnitCode["AL"] = 27] = "AL";
        federalUnitCode[federalUnitCode["AM"] = 13] = "AM";
        federalUnitCode[federalUnitCode["AP"] = 16] = "AP";
        federalUnitCode[federalUnitCode["BA"] = 29] = "BA";
        federalUnitCode[federalUnitCode["CE"] = 23] = "CE";
        federalUnitCode[federalUnitCode["DF"] = 53] = "DF";
        federalUnitCode[federalUnitCode["ES"] = 32] = "ES";
        federalUnitCode[federalUnitCode["GO"] = 52] = "GO";
        federalUnitCode[federalUnitCode["MA"] = 21] = "MA";
        federalUnitCode[federalUnitCode["MG"] = 31] = "MG";
        federalUnitCode[federalUnitCode["MS"] = 50] = "MS";
        federalUnitCode[federalUnitCode["MT"] = 51] = "MT";
        federalUnitCode[federalUnitCode["PA"] = 15] = "PA";
        federalUnitCode[federalUnitCode["PB"] = 25] = "PB";
        federalUnitCode[federalUnitCode["PE"] = 26] = "PE";
        federalUnitCode[federalUnitCode["PI"] = 22] = "PI";
        federalUnitCode[federalUnitCode["PR"] = 41] = "PR";
        federalUnitCode[federalUnitCode["RJ"] = 33] = "RJ";
        federalUnitCode[federalUnitCode["RN"] = 24] = "RN";
        federalUnitCode[federalUnitCode["RO"] = 11] = "RO";
        federalUnitCode[federalUnitCode["RR"] = 14] = "RR";
        federalUnitCode[federalUnitCode["RS"] = 43] = "RS";
        federalUnitCode[federalUnitCode["SC"] = 42] = "SC";
        federalUnitCode[federalUnitCode["SE"] = 28] = "SE";
        federalUnitCode[federalUnitCode["SP"] = 35] = "SP";
        federalUnitCode[federalUnitCode["TO"] = 17] = "TO";
    })(federalUnitCode || (federalUnitCode = {}));
    federalUnitList.forEach(function (federalUnit) {
        var option = document.createElement("option");
        option.value = federalUnitCode[federalUnit].toString();
        option.text = federalUnit;
        federalUnitSelector.add(option);
    });
    // Preencher o campo Data de Emissão (monthYear)
    var monthYearInput = document.getElementById("monthYear");
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var formattedMonth = month < 10 ? "0".concat(month) : month;
    var formattedYear = year.toString();
    var formattedMonthYear = "".concat(formattedYear, "-").concat(formattedMonth);
    monthYearInput.value = formattedMonthYear;
    // Preencher o seletor de modelo de documento fiscal (model)
    var modelSelector = document.getElementById("model");
    var modelList = ["NF-e", "NFC-e"];
    var modelCode;
    (function (modelCode) {
        modelCode[modelCode["NF-e"] = 55] = "NF-e";
        modelCode[modelCode["NFC-e"] = 65] = "NFC-e";
    })(modelCode || (modelCode = {}));
    modelList.forEach(function (model) {
        var option = document.createElement("option");
        option.value = modelCode[model].toString();
        option.text = model;
        modelSelector.add(option);
    });
    // Preencher o campo de série (serie)
    var serieInput = document.getElementById("serie");
    serieInput.value = generateRandomNumber(3).toString();
    // Preencher o campo de número (number)
    var numberInput = document.getElementById("number");
    numberInput.value = generateRandomNumber(9).toString();
    // Preencher o campo Tipo de Emissão (emissionType)
    var emissionTypeSelector = document.getElementById("emissionType");
    var emissionTypeList = [
        "Normal",
        "Contingência FS-IA",
        "Contingência SCAN",
        "Contingência DPEC",
        "Contingência FS-DA",
        "Contingência SVC-AN",
        "Contingência SVC-RS",
        "Contingência off-line NFC-e",
        "Contingência EPEC",
    ];
    var emissionTypeCode;
    (function (emissionTypeCode) {
        emissionTypeCode[emissionTypeCode["Normal"] = 1] = "Normal";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia FS-IA"] = 2] = "Conting\u00EAncia FS-IA";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia SCAN"] = 3] = "Conting\u00EAncia SCAN";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia DPEC"] = 4] = "Conting\u00EAncia DPEC";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia FS-DA"] = 5] = "Conting\u00EAncia FS-DA";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia SVC-AN"] = 6] = "Conting\u00EAncia SVC-AN";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia SVC-RS"] = 7] = "Conting\u00EAncia SVC-RS";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia off-line NFC-e"] = 9] = "Conting\u00EAncia off-line NFC-e";
        emissionTypeCode[emissionTypeCode["Conting\u00EAncia EPEC"] = 10] = "Conting\u00EAncia EPEC";
    })(emissionTypeCode || (emissionTypeCode = {}));
    emissionTypeList.forEach(function (emissionType) {
        var option = document.createElement("option");
        option.value = emissionTypeCode[emissionType].toString();
        option.text = emissionType;
        emissionTypeSelector.add(option);
    });
    // Preencher o campo Código Númerico (code)
    var codeInput = document.getElementById("code");
    codeInput.value = generateRandomNumber(8).toString();
    // // Preencher o campo Digito Verificador (digit)
    var digitInput = document.getElementById("digit");
    digitInput.value = generateAccessKey().slice(-1);
    // Preencher o campo Chave de Acesso (accessKey)
    var accessKeyInput = document.getElementById("accessKey");
    accessKeyInput.value = generateAccessKey();
});
// Atualizar a chave de acesso quando clicar no botão "Gerar Chave"
var generateAccessKeyButton = document.getElementById("generateAccessKeyButton");
generateAccessKeyButton.addEventListener("click", function () {
    var accessKeyInput = document.getElementById("accessKey");
    var digitInput = document.getElementById("digit");
    var accessKey = generateAccessKey();
    digitInput.value = accessKey.slice(-1);
    accessKeyInput.value = accessKey;
    var qrCodeImage = document.getElementById("qrCode");
    qrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(accessKey);
    qrCodeImage.alt = accessKey;
    qrCodeImage.style.display = "block";
});
// Campos de série, número e código numérico aceitam apenas números
var serieInput = document.getElementById("serie");
serieInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});
var numberInput = document.getElementById("number");
numberInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});
var codeInput = document.getElementById("code");
codeInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});
function generateRandomNumber(digits) {
    var min = Math.pow(10, digits - 1);
    var max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getVerifierDigit(accessKey) {
    var sum = 0;
    var multiplier = 2;
    for (var linPosicao = accessKey.length - 1; linPosicao >= 0; linPosicao--) {
        sum += parseInt(accessKey[linPosicao]) * multiplier;
        multiplier++;
        if (multiplier > 9) {
            multiplier = 2;
        }
    }
    var result = 11 - (sum % 11);
    if (result >= 10) {
        result = 0;
    }
    return String(result);
}
function generateAccessKey() {
    var federalUnitSelector = document.getElementById("federalUnit");
    var federalUnit = federalUnitSelector.value;
    var monthYearInput = document.getElementById("monthYear");
    var monthYear = monthYearInput.value;
    var monthYearArray = monthYear.split("-");
    var currentYear = new Date().getFullYear().toString().substring(2);
    var currentMonth = new Date().getMonth() + 1;
    var formattedCurrentMonthYear = "".concat(currentYear).concat(currentMonth);
    var formattedMonthYear = monthYearArray[0].substring(2) + monthYearArray[1] ||
        formattedCurrentMonthYear;
    var cnpjInput = document.getElementById("cnpj");
    var cnpj = cnpjInput.value.replace(/\D/g, "");
    var modelSelector = document.getElementById("model");
    var model = modelSelector.value;
    var serieInput = document.getElementById("serie");
    var serie = serieInput.value;
    var numberInput = document.getElementById("number");
    var number = numberInput.value;
    var emissionTypeSelector = document.getElementById("emissionType");
    var emissionType = emissionTypeSelector.value;
    var codeInput = document.getElementById("code");
    var code = codeInput.value;
    var accessKey = "".concat(federalUnit).concat(formattedMonthYear).concat(cnpj).concat(model).concat(serie).concat(number).concat(emissionType).concat(code);
    var digit = getVerifierDigit(accessKey);
    var finalAccessKey = "".concat(federalUnit).concat(formattedMonthYear).concat(cnpj).concat(model).concat(serie).concat(number).concat(emissionType).concat(code).concat(digit);
    return finalAccessKey;
}
