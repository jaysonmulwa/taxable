"use strict";
const _PAYE = require("./../calculators/KE_paye");
const _NHIF = require("./../calculators/KE_nhif");
const _NSSF = require("./../calculators/KE_nssf");
const _Housing = require("./../calculators/KE_housing");
const _NetPay = require("./../calculators/KE_netpay");
const _GrossPay = require("./../calculators/KE_grosspay");
module.exports = {
    PAYE: _PAYE,
    NHIF: _NHIF,
    NSSF: _NSSF,
    HousingFund: _Housing,
    NetPay: _NetPay,
    GrossPay: _GrossPay,
};
