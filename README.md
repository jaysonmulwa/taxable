![npm](https://img.shields.io/npm/v/taxable?color=green&label=taxable)
[![CodeFactor](https://www.codefactor.io/repository/github/jaysonmulwa/taxable/badge)](https://www.codefactor.io/repository/github/jaysonmulwa/taxable)

[![Logo](assets/taxable.png)](https://github.com/jaysonmulwa/taxable/)



A library of income tax calculation functions from various countries around the world.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install taxable
```

## Full API

### 1. Kenya <img src="https://static.dwcdn.net/css/flag-icons/flags/4x3/ke.svg" alt="ke" height="15">

#### Reference

- amount - Amount - Refers to the gross amount.
  - takes in a value from (0.00 upwards)
- basic_pay - Basic Pay - Refers to the Basic pay
  - takes in a value from (0.00 upwards)
- benefits - Benefits - Refers to allowances and other earnings that contribute to the basic pay.
  - takes in a value from (0.00 upwards)
- insurance_relief - Insurance Relief - Refers to the insurance relief offered if it exists.
  - takes in a value from (0.00 upwards)
- new_rates - New Rates - Whether or not to use the new rates.
  - takes (true, false)
- tier - Tier - This refers to the tier
  - takes values (1,2)
  - 1 for nssf tier 1
  - 2 for both nssf tier 1 and 2

#### Usage Example

```js
const taxable = require("taxable");

let result_1 = taxable.KE.NHIF({ amount: 10000 });
console.log(result_1);

let result_2 = taxable.KE.PAYE({
  basicPay: 22000,
  benefits: 2000,
  insuranceRelief: 0,
}); //All add up to make Gross
console.log(result_2);

let result_3 = taxable.KE.NSSF({ amount: 9000, newRates: true, tier: 2 }); //Amount is Gross Pay or Pensionable amount
console.log(result_3);
```

## Contributing

- Read the Contributing guide
- Contact me jayson.mulwa@gmail.com for assistance

## License

[MIT](LICENSE)
