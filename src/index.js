import { random, isArray } from './utils';

export const shuffle = (ary) => {
  if (typeof ary === 'undefined') {
    throw new Error('shuffle function arguments is undefined');
  }

  if (isArray(ary)) {
    let newAry = [];
    let scratch = Array.from(ary);

    for (let i = 0; i < ary.length - 1; i++) {
      let roll = random(1, scratch.length) - 1;
      let get = scratch.splice(roll, 1)[0];
      newAry.push(get);
    }
    newAry.push(scratch[0]);

    return newAry;
  } else {
    throw new Error('arguments must be an instance of Array');
  }
};
