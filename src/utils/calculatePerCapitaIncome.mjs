const calculatePerCapitaIncome = (monthlyIncome, dependentsNumber) => {
  if (dependentsNumber === '0') {
    return monthlyIncome;
  }

  return (Number(monthlyIncome) / (Number(dependentsNumber) + 1)).toFixed(2);

};

export default calculatePerCapitaIncome;
