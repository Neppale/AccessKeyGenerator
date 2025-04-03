import { FEDERAL_UNITS, FederalUnitCode, DOCUMENT_MODELS, ModelCode, EMISSION_TYPES, EmissionTypeCode, } from "../constants/index.js";
import { generateRandomNumber, formatMonthYear, generateAccessKey, } from "../utils/keyGenerator.js";
export class FormHandler {
    constructor() {
        this.federalUnitSelector = document.getElementById("federalUnit");
        this.monthYearInput = document.getElementById("monthYear");
        this.modelSelector = document.getElementById("model");
        this.serieInput = document.getElementById("serie");
        this.numberInput = document.getElementById("number");
        this.emissionTypeSelector = document.getElementById("emissionType");
        this.codeInput = document.getElementById("code");
        this.digitInput = document.getElementById("digit");
        this.accessKeyInput = document.getElementById("accessKey");
        this.generateButton = document.getElementById("generateAccessKeyButton");
        this.qrCodeImage = document.getElementById("qrCode");
        this.initializeForm();
        this.setupEventListeners();
    }
    initializeForm() {
        this.initializeFederalUnitSelector();
        this.initializeMonthYear();
        this.initializeModelSelector();
        this.initializeSerie();
        this.initializeNumber();
        this.initializeEmissionTypeSelector();
        this.initializeCode();
        this.initializeAccessKey();
    }
    initializeFederalUnitSelector() {
        FEDERAL_UNITS.forEach((unit) => {
            const option = document.createElement("option");
            option.value = FederalUnitCode[unit].toString();
            option.text = unit;
            this.federalUnitSelector.add(option);
        });
    }
    initializeMonthYear() {
        this.monthYearInput.value = formatMonthYear();
    }
    initializeModelSelector() {
        DOCUMENT_MODELS.forEach((model) => {
            const option = document.createElement("option");
            option.value = ModelCode[model].toString();
            option.text = model;
            this.modelSelector.add(option);
        });
    }
    initializeSerie() {
        this.serieInput.value = generateRandomNumber(3).toString();
    }
    initializeNumber() {
        this.numberInput.value = generateRandomNumber(9).toString();
    }
    initializeEmissionTypeSelector() {
        EMISSION_TYPES.forEach((type) => {
            const option = document.createElement("option");
            option.value = EmissionTypeCode[type].toString();
            option.text = type;
            this.emissionTypeSelector.add(option);
        });
    }
    initializeCode() {
        this.codeInput.value = generateRandomNumber(8).toString();
    }
    initializeAccessKey() {
        const accessKey = this.generateAccessKey();
        this.digitInput.value = accessKey.slice(-1);
        this.accessKeyInput.value = accessKey;
    }
    setupEventListeners() {
        this.generateButton.addEventListener("click", () => this.handleGenerateClick());
        this.serieInput.addEventListener("input", () => this.handleNumericInput(this.serieInput));
        this.numberInput.addEventListener("input", () => this.handleNumericInput(this.numberInput));
        this.codeInput.addEventListener("input", () => this.handleNumericInput(this.codeInput));
    }
    handleGenerateClick() {
        const accessKey = this.generateAccessKey();
        this.digitInput.value = accessKey.slice(-1);
        this.accessKeyInput.value = accessKey;
        this.updateQRCode(accessKey);
    }
    handleNumericInput(input) {
        input.value = input.value.replace(/\D/g, "");
    }
    generateAccessKey() {
        const cnpjInput = document.getElementById("cnpj");
        const cnpj = cnpjInput.value.replace(/\D/g, "");
        return generateAccessKey({
            federalUnit: this.federalUnitSelector.value,
            monthYear: this.monthYearInput.value,
            cnpj,
            model: this.modelSelector.value,
            serie: this.serieInput.value,
            number: this.numberInput.value,
            emissionType: this.emissionTypeSelector.value,
            code: this.codeInput.value,
        });
    }
    updateQRCode(accessKey) {
        this.qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${accessKey}`;
        this.qrCodeImage.alt = accessKey;
        this.qrCodeImage.style.display = "block";
    }
}
