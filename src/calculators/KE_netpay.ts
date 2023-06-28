const paye = require("./KE_paye");
const nhif = require("./KE_nhif");
const nssf = require("./KE_nssf");
const housingLevy = require("./KE_housing");

const NetPay = (args: {
  grossPay: number;
  nonCashBenefits: number;
  pension: number;
  otherAllowableDeductions: number;
  housedByEmployer: boolean;
  ignoreCashBenefitsUpto3000: boolean;
  nssfTier: number; // 1 or 2 or 0 (for old rates)
}): number => {
  const {
    grossPay = 0,
    nonCashBenefits = 0,
    pension = 0,
    otherAllowableDeductions = 0,
    housedByEmployer = false,
    ignoreCashBenefitsUpto3000 = true,
    nssfTier = 1,
  } = args;

  const allowableDeductions: number = 1080 + otherAllowableDeductions + pension;
  const benefitsNonCash: number = ignoreCashBenefitsUpto3000
    ? nonCashBenefits <= 3000
      ? 0
      : nonCashBenefits
    : nonCashBenefits;
  const monthlyTaxablePay: number =
    grossPay + benefitsNonCash - allowableDeductions;

  const __housingLevy: number = housingLevy({ grossPay: grossPay });

  const totalDeductions = deductions(
    monthlyTaxablePay,
    grossPay,
    nssfTier,
    pension
  );

  const netPay = grossPay - totalDeductions;
  return netPay;
};

const deductions = (
  monthlyTaxablePay: number,
  grossPay: number,
  nssfTier: number,
  pension: number
): number => {
  const __paye: number = paye({
    basicPay: monthlyTaxablePay,
    benefits: 0,
    insuranceRelief: 0,
  });
  const __nhif: number = nhif({ amount: grossPay });
  const __nssf: number = nssf({
    amount: grossPay,
    newRates: true,
    tier: nssfTier,
  });
  return __paye + __nhif + __nssf + pension;
};
