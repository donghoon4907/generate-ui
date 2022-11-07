const getConverter = (first: string, second: string) => {
  let converter;
  if (first.length > second.length) {
    converter = 10 ** (first.length - 2);
  } else {
    converter = 10 ** (second.length - 2);
  }

  return converter;
};

const getConvertedDecimals = (currentValue: number, addValue: number) => {
  const strCurrentValue = String(currentValue);

  const strAddValue = String(addValue);

  const converter = getConverter(strCurrentValue, strAddValue);

  const convertCurrentValue = Math.round(+strCurrentValue * converter);

  const convertAddValue = +strAddValue * converter;

  return {
    converter,
    convertCurrentValue,
    convertAddValue
  };
};

export const plusDecimal = (currentValue: number, addValue: number) => {
  const { converter, convertCurrentValue, convertAddValue } =
    getConvertedDecimals(currentValue, addValue);

  return (convertCurrentValue + convertAddValue) / converter;
};

export const minusDecimal = (currentValue: number, addValue: number) => {
  const { converter, convertCurrentValue, convertAddValue } =
    getConvertedDecimals(currentValue, addValue);

  return (convertCurrentValue - convertAddValue) / converter;
};
