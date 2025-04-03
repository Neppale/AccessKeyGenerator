export function generateRandomNumber(digits: number): number {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getVerifierDigit(accessKey: string): string {
  let sum = 0;
  let multiplier = 2;

  for (let i = accessKey.length - 1; i >= 0; i--) {
    sum += parseInt(accessKey[i]) * multiplier;
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

export function formatMonthYear(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : month;
  return `${year}-${formattedMonth}`;
}

export function generateAccessKey(params: {
  federalUnit: string;
  monthYear: string;
  cnpj: string;
  model: string;
  serie: string;
  number: string;
  emissionType: string;
  code: string;
}): string {
  const { federalUnit, monthYear, cnpj, model, serie, number, emissionType, code } = params;
  
  const monthYearArray = monthYear.split("-");
  const formattedMonthYear = monthYearArray[0].substring(2) + monthYearArray[1];
  
  const accessKey = `${federalUnit}${formattedMonthYear}${cnpj}${model}${serie}${number}${emissionType}${code}`;
  const digit = getVerifierDigit(accessKey);
  
  return `${accessKey}${digit}`;
} 