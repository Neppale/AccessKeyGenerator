import {
  FEDERAL_UNITS,
  FederalUnitCode,
  DOCUMENT_MODELS,
  ModelCode,
  EMISSION_TYPES,
  EmissionTypeCode,
} from "../constants/index.js";
import {
  generateRandomNumber,
  formatMonthYear,
  generateAccessKey,
} from "../utils/keyGenerator.js";

export class FormHandler {
  private federalUnitSelector: HTMLSelectElement;
  private monthYearInput: HTMLInputElement;
  private modelSelector: HTMLSelectElement;
  private serieInput: HTMLInputElement;
  private numberInput: HTMLInputElement;
  private emissionTypeSelector: HTMLSelectElement;
  private codeInput: HTMLInputElement;
  private digitInput: HTMLInputElement;
  private accessKeyInput: HTMLInputElement;
  private generateButton: HTMLButtonElement;
  private qrCodeImage: HTMLImageElement;

  constructor() {
    this.federalUnitSelector = document.getElementById(
      "federalUnit"
    ) as HTMLSelectElement;
    this.monthYearInput = document.getElementById(
      "monthYear"
    ) as HTMLInputElement;
    this.modelSelector = document.getElementById("model") as HTMLSelectElement;
    this.serieInput = document.getElementById("serie") as HTMLInputElement;
    this.numberInput = document.getElementById("number") as HTMLInputElement;
    this.emissionTypeSelector = document.getElementById(
      "emissionType"
    ) as HTMLSelectElement;
    this.codeInput = document.getElementById("code") as HTMLInputElement;
    this.digitInput = document.getElementById("digit") as HTMLInputElement;
    this.accessKeyInput = document.getElementById(
      "accessKey"
    ) as HTMLInputElement;
    this.generateButton = document.getElementById(
      "generateAccessKeyButton"
    ) as HTMLButtonElement;
    this.qrCodeImage = document.getElementById("qrCode") as HTMLImageElement;

    this.initializeForm();
    this.setupEventListeners();
  }

  private initializeForm(): void {
    this.initializeFederalUnitSelector();
    this.initializeMonthYear();
    this.initializeModelSelector();
    this.initializeSerie();
    this.initializeNumber();
    this.initializeEmissionTypeSelector();
    this.initializeCode();
    this.initializeAccessKey();
  }

  private initializeFederalUnitSelector(): void {
    FEDERAL_UNITS.forEach((unit) => {
      const option = document.createElement("option");
      option.value = FederalUnitCode[unit].toString();
      option.text = unit;
      this.federalUnitSelector.add(option);
    });
  }

  private initializeMonthYear(): void {
    this.monthYearInput.value = formatMonthYear();
  }

  private initializeModelSelector(): void {
    DOCUMENT_MODELS.forEach((model) => {
      const option = document.createElement("option");
      option.value = ModelCode[model].toString();
      option.text = model;
      this.modelSelector.add(option);
    });
  }

  private initializeSerie(): void {
    this.serieInput.value = generateRandomNumber(3).toString();
  }

  private initializeNumber(): void {
    this.numberInput.value = generateRandomNumber(9).toString();
  }

  private initializeEmissionTypeSelector(): void {
    EMISSION_TYPES.forEach((type) => {
      const option = document.createElement("option");
      option.value = EmissionTypeCode[type].toString();
      option.text = type;
      this.emissionTypeSelector.add(option);
    });
  }

  private initializeCode(): void {
    this.codeInput.value = generateRandomNumber(8).toString();
  }

  private initializeAccessKey(): void {
    const accessKey = this.generateAccessKey();
    this.digitInput.value = accessKey.slice(-1);
    this.accessKeyInput.value = accessKey;
  }

  private setupEventListeners(): void {
    this.generateButton.addEventListener("click", () =>
      this.handleGenerateClick()
    );
    this.serieInput.addEventListener("input", () =>
      this.handleNumericInput(this.serieInput)
    );
    this.numberInput.addEventListener("input", () =>
      this.handleNumericInput(this.numberInput)
    );
    this.codeInput.addEventListener("input", () =>
      this.handleNumericInput(this.codeInput)
    );
  }

  private handleGenerateClick(): void {
    const accessKey = this.generateAccessKey();
    this.digitInput.value = accessKey.slice(-1);
    this.accessKeyInput.value = accessKey;
    this.updateQRCode(accessKey);
  }

  private handleNumericInput(input: HTMLInputElement): void {
    input.value = input.value.replace(/\D/g, "");
  }

  private generateAccessKey(): string {
    const cnpjInput = document.getElementById("cnpj") as HTMLInputElement;
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

  private updateQRCode(accessKey: string): void {
    this.qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${accessKey}`;
    this.qrCodeImage.alt = accessKey;
    this.qrCodeImage.style.display = "block";
  }
}
