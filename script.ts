document.addEventListener("DOMContentLoaded", function () {
  // Preencher o seletor de Unidade Federal (federalUnit)
  const federalUnitSelector = document.getElementById(
    "federalUnit"
  ) as HTMLSelectElement;
  const federalUnitList = [
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

  enum federalUnitCode {
    AC = 12,
    AL = 27,
    AM = 13,
    AP = 16,
    BA = 29,
    CE = 23,
    DF = 53,
    ES = 32,
    GO = 52,
    MA = 21,
    MG = 31,
    MS = 50,
    MT = 51,
    PA = 15,
    PB = 25,
    PE = 26,
    PI = 22,
    PR = 41,
    RJ = 33,
    RN = 24,
    RO = 11,
    RR = 14,
    RS = 43,
    SC = 42,
    SE = 28,
    SP = 35,
    TO = 17,
  }
  federalUnitList.forEach((federalUnit) => {
    const option = document.createElement("option");
    option.value = federalUnitCode[federalUnit].toString();
    option.text = federalUnit;
    federalUnitSelector.add(option);
  });

  // Preencher o campo Data de Emissão (monthYear)
  const monthYearInput = document.getElementById(
    "monthYear"
  ) as HTMLInputElement;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedYear = year.toString();
  const formattedMonthYear = `${formattedYear}-${formattedMonth}`;
  monthYearInput.value = formattedMonthYear;

  // Preencher o seletor de modelo de documento fiscal (model)
  const modelSelector = document.getElementById("model") as HTMLSelectElement;
  const modelList = ["NF-e", "NFC-e"];

  enum modelCode {
    "NF-e" = 55,
    "NFC-e" = 65,
  }

  modelList.forEach((model) => {
    const option = document.createElement("option");
    option.value = modelCode[model].toString();
    option.text = model;
    modelSelector.add(option);
  });

  // Preencher o campo de série (serie)
  const serieInput = document.getElementById("serie") as HTMLInputElement;
  serieInput.value = generateRandomNumber(3).toString();

  // Preencher o campo de número (number)
  const numberInput = document.getElementById("number") as HTMLInputElement;
  numberInput.value = generateRandomNumber(9).toString();

  // Preencher o campo Tipo de Emissão (emissionType)
  const emissionTypeSelector = document.getElementById(
    "emissionType"
  ) as HTMLSelectElement;
  const emissionTypeList = [
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

  enum emissionTypeCode {
    "Normal" = 1,
    "Contingência FS-IA" = 2,
    "Contingência SCAN" = 3,
    "Contingência DPEC" = 4,
    "Contingência FS-DA" = 5,
    "Contingência SVC-AN" = 6,
    "Contingência SVC-RS" = 7,
    "Contingência off-line NFC-e" = 9,
    "Contingência EPEC" = 10,
  }

  emissionTypeList.forEach((emissionType) => {
    const option = document.createElement("option");
    option.value = emissionTypeCode[emissionType].toString();
    option.text = emissionType;
    emissionTypeSelector.add(option);
  });

  // Preencher o campo Código Númerico (code)
  const codeInput = document.getElementById("code") as HTMLInputElement;
  codeInput.value = generateRandomNumber(8).toString();

  // // Preencher o campo Digito Verificador (digit)
  const digitInput = document.getElementById("digit") as HTMLInputElement;
  digitInput.value = generateAccessKey().slice(-1);

  // Preencher o campo Chave de Acesso (accessKey)
  const accessKeyInput = document.getElementById(
    "accessKey"
  ) as HTMLInputElement;
  accessKeyInput.value = generateAccessKey();
});

// Atualizar a chave de acesso quando clicar no botão "Gerar Chave"
const generateAccessKeyButton = document.getElementById(
  "generateAccessKeyButton"
) as HTMLButtonElement;
generateAccessKeyButton.addEventListener("click", function () {
  const accessKeyInput = document.getElementById(
    "accessKey"
  ) as HTMLInputElement;
  const digitInput = document.getElementById("digit") as HTMLInputElement;
  const accessKey = generateAccessKey();
  digitInput.value = accessKey.slice(-1);
  accessKeyInput.value = accessKey;
  const qrCodeImage = document.getElementById("qrCode") as HTMLImageElement;
  qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${accessKey}`;
  qrCodeImage.alt = accessKey;
  qrCodeImage.style.display = "block";
});

// Campos de série, número e código numérico aceitam apenas números
const serieInput = document.getElementById("serie") as HTMLInputElement;
serieInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

const numberInput = document.getElementById("number") as HTMLInputElement;
numberInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

const codeInput = document.getElementById("code") as HTMLInputElement;
codeInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

function generateRandomNumber(digits: number): number {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getVerifierDigit(accessKey: string) {
  let sum = 0;
  let multiplier = 2;

  for (let linPosicao = accessKey.length - 1; linPosicao >= 0; linPosicao--) {
    sum += parseInt(accessKey[linPosicao]) * multiplier;
    multiplier++;

    if (multiplier > 9) {
      multiplier = 2;
    }
  }

  let result = 11 - (sum % 11);
  if (result >= 10) {
    result = 0;
  }

  return String(result);
}

function generateAccessKey() {
  const federalUnitSelector = document.getElementById(
    "federalUnit"
  ) as HTMLSelectElement;
  const federalUnit = federalUnitSelector.value;

  const monthYearInput = document.getElementById(
    "monthYear"
  ) as HTMLInputElement;
  const monthYear = monthYearInput.value;
  const monthYearArray = monthYear.split("-");
  const currentYear = new Date().getFullYear().toString().substring(2);
  const currentMonth = new Date().getMonth() + 1;
  const formattedCurrentMonthYear = `${currentYear}${currentMonth}`;
  const formattedMonthYear =
    monthYearArray[0].substring(2) + monthYearArray[1] ||
    formattedCurrentMonthYear;

  const cnpjInput = document.getElementById("cnpj") as HTMLInputElement;
  const cnpj = cnpjInput.value.replace(/\D/g, "");

  const modelSelector = document.getElementById("model") as HTMLSelectElement;
  const model = modelSelector.value;

  const serieInput = document.getElementById("serie") as HTMLInputElement;
  const serie = serieInput.value;

  const numberInput = document.getElementById("number") as HTMLInputElement;
  const number = numberInput.value;

  const emissionTypeSelector = document.getElementById(
    "emissionType"
  ) as HTMLSelectElement;
  const emissionType = emissionTypeSelector.value;

  const codeInput = document.getElementById("code") as HTMLInputElement;
  const code = codeInput.value;

  const accessKey = `${federalUnit}${formattedMonthYear}${cnpj}${model}${serie}${number}${emissionType}${code}`;

  const digit = getVerifierDigit(accessKey);

  const finalAccessKey = `${federalUnit}${formattedMonthYear}${cnpj}${model}${serie}${number}${emissionType}${code}${digit}`;
  return finalAccessKey;
}
