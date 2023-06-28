const housing = (args: { grossSalary: number }): number => {
  const PERCENT = 1.5;
  const housingDeduction = (PERCENT / 100) * args.grossSalary;
  return Number(housingDeduction.toFixed(2));
};

module.exports = housing;
