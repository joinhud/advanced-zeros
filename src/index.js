module.exports = function getZerosCount(number, base) {
  let result = 0;
  let multipliers = calcSimpleMultipliers(base);
  let degree = multipliers.length;
  base = multipliers[0];

  while (number > 0) {
    number = Math.floor(number / base);
    result += number;
  }

  return Math.floor(result / degree);
}

function calcSimpleMultipliers(x) {
  const minMultiplier = 2;
  let i = minMultiplier;
  let max = minMultiplier;
  let multipliers = [];
  let result = [];

  while (i <= x) {
    if (x % i === 0) {
      if (i > max) {
        max = i;
      }

      multipliers.push(i);
      x /= i;
    }
    else {
      i++;
    }
  }

  let maxMultipliersArray = multipliers.filter(element => element === max);
  let minMultipliersArray = multipliers.filter(element => element === minMultiplier);


  if (minMultipliersArray.length >= Math.pow(max, maxMultipliersArray.length)) {
    result = minMultipliersArray;
  } else {
    result = maxMultipliersArray;
  }

  return result;
}