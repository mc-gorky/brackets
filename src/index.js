module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const splitStr = str.split('');

  const openingBrackets = bracketsConfig.reduce((result, item) => {
    result.push(item[0]);

    return result;
  }, []);

  const closingBrackets = bracketsConfig.reduce((result, item) => {
    result.push(item[1]);

    return result;
  }, []);

  let isCorrect = true;

  const processedOpeningBrackets = [];

  splitStr.forEach(bracket => {
    if (openingBrackets.includes(bracket) && (!closingBrackets.includes(bracket) || (closingBrackets.includes(bracket) && !processedOpeningBrackets.includes(bracket)))) {
      processedOpeningBrackets.push(bracket);
    } else {
      const openedBrackets = bracketsConfig.find(config => config.includes(bracket))[0];

      if (processedOpeningBrackets[processedOpeningBrackets.length - 1] === openedBrackets) {
        processedOpeningBrackets.pop();
      } else {
        isCorrect = false;
      }
    }
  });

  return isCorrect;
}