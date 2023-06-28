"use strict";
const KE = require("./countries/KE");
const taxable = {
    KE: KE,
};
console.log(taxable.KE.HousingFund({ grossSalary: 100000 }));
module.exports = taxable;
