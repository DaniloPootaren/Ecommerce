import { helper } from '@ember/component/helper';

// @ts-ignore
export function formatter(params/*, hash*/) {
  const number = params[0];

  return `${number/1000} rs`;
}

export default helper(formatter);
