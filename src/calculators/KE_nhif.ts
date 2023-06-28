const NHIF = (args: { amount: number }) => {
  let NHIF_Amount: number = 0.0;
  const gross = args.amount;

  switch (true) {
    case gross <= 5999:
      NHIF_Amount = 150;

      break;

    case gross <= 7999:
      NHIF_Amount = 300;

      break;
    case gross <= 11999:
      NHIF_Amount = 400;

      break;

    case gross <= 14999:
      NHIF_Amount = 500;

      break;

    case gross <= 19999:
      NHIF_Amount = 600;

      break;

    case gross <= 24999:
      NHIF_Amount = 750;

      break;
    case gross <= 29999:
      NHIF_Amount = 850;

      break;

    case gross <= 34999:
      NHIF_Amount = 900;

      break;

    case gross <= 39999:
      NHIF_Amount = 950;

      break;
    case gross <= 44999:
      NHIF_Amount = 1000;

      break;

    case gross <= 49999:
      NHIF_Amount = 1100;

      break;
    case gross <= 59999:
      NHIF_Amount = 1200;

      break;

    case gross <= 69999:
      NHIF_Amount = 1300;

      break;

    case gross <= 79999:
      NHIF_Amount = 1400;

      break;
    case gross <= 89999:
      NHIF_Amount = 1500;

      break;

    case gross <= 99999:
      NHIF_Amount = 1600;

      break;
    default:
      NHIF_Amount = 1700;
      break;
  }

  return NHIF_Amount.toFixed(2);
};

module.exports = NHIF;
