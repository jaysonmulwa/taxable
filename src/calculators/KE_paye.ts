const PAYE = (args: {
  basicPay: number;
  benefits: number;
  insuranceRelief: number;
}): any => {
  const RELIEF: number = 2400;
  let paye: number = 0.0;
  let counter: number = 1;
  let { basicPay, benefits, insuranceRelief } = args;
  let taxable: number = basicPay + benefits;

  while (taxable > 0) {
    let [taxing, percent] = tiers(counter);

    if (taxable < taxing) {
      paye += (taxable * percent) / 100;
      taxable -= taxing;
    } else if (taxing == 0) {
      paye += (taxable * percent) / 100;
      taxable -= taxable;
    } else {
      paye += (taxing * percent) / 100;
      taxable -= taxing;
    }

    counter++;
  }

  paye -= RELIEF + insuranceRelief;

  if (paye < 0) {
    return 0;
  } else {
    return paye.toFixed(2);
  }
};

const tiers = (x: number): [number, number] => {
  let taxing: number = 0;
  let percent: number = 0;

  switch (x) {
    case 1:
      taxing = 24000;
      percent = 10;
      break;
    case 2:
      taxing = 16667;
      percent = 15;
      break;
    case 3:
      taxing = 16666;
      percent = 20;
      break;

    default:
      taxing = 0;
      percent = 25;
      break;
  }

  return [taxing, percent];
};

const old_tiers = (x: number): [number, number] => {
  let taxing: number = 0;
  let percent: number = 0;

  switch (x) {
    case 1:
      taxing = 12298;
      percent = 10;
      break;
    case 2:
      taxing = 11587;
      percent = 15;
      break;
    case 3:
      taxing = 11587;
      percent = 20;
      break;
    case 4:
      taxing = 11587;
      percent = 25;
      break;

    default:
      taxing = 0;
      percent = 30;
      break;
  }

  return [taxing, percent];
};

module.exports = PAYE;
