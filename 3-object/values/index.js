export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(source)) sum += Number(source[key]);
  return sum;
}
