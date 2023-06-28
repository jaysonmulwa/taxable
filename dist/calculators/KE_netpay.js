"use strict";
const paye = require("./KE_paye");
const nhif = require("./KE_nhif");
const nssf = require("./KE_nssf");
const housingLevy = require("./KE_housing");
const NetPay = (args) => {
    const { grossPay = 0, nonCashBenefits = 0, pension = 0, otherAllowableDeductions = 0, housedByEmployer = false, ignoreCashBenefitsUpto3000 = true, nssfTier = 1, } = args;
    const allowableDeductions = 1080 + otherAllowableDeductions + pension;
    const benefitsNonCash = ignoreCashBenefitsUpto3000
        ? nonCashBenefits <= 3000
            ? 0
            : nonCashBenefits
        : nonCashBenefits;
    const monthlyTaxablePay = grossPay + benefitsNonCash - allowableDeductions;
    const __housingLevy = housingLevy({ grossPay: grossPay });
    const totalDeductions = deductions(monthlyTaxablePay, grossPay, nssfTier, pension);
    const netPay = grossPay - totalDeductions;
    return netPay;
};
const deductions = (monthlyTaxablePay, grossPay, nssfTier, pension) => {
    const __paye = paye({
        basicPay: monthlyTaxablePay,
        benefits: 0,
        insuranceRelief: 0,
    });
    const __nhif = nhif({ amount: grossPay });
    const __nssf = nssf({
        amount: grossPay,
        newRates: true,
        tier: nssfTier,
    });
    return __paye + __nhif + __nssf + pension;
};
