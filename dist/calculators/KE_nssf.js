"use strict";
const NSSF = (args) => {
    let { amount } = args;
    const { newRates, tier } = args;
    let counter = 1;
    let max_counter = 0;
    let nssf_payable = 0.0;
    if (newRates) {
        if (tier == 1) {
            max_counter = 1;
        }
        else if (tier == 2) {
            max_counter = 2;
        }
        else {
            //throw new Error("Invalid tier");
            return 0;
        }
        while (amount > 0 && counter <= max_counter) {
            const pensionable = rates(counter);
            if (amount < pensionable) {
                nssf_payable += 0.06 * amount;
                amount -= amount;
            }
            else {
                nssf_payable += 0.06 * pensionable;
                amount -= pensionable;
            }
            counter++;
        }
        return Number(nssf_payable.toFixed(2));
    }
    else {
        const UPPER_LIMIT = 1080;
        nssf_payable = 0.05 * amount;
        nssf_payable = nssf_payable > UPPER_LIMIT ? UPPER_LIMIT : nssf_payable;
        return Number(nssf_payable.toFixed(2));
    }
};
const rates = (x) => {
    let pensionable = 0;
    switch (x) {
        case 1:
            pensionable = 6000;
            break;
        case 2:
            pensionable = 12000;
            break;
        default:
            pensionable = 0;
            break;
    }
    return pensionable;
};
module.exports = NSSF;
