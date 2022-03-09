export const random = (from, to) => {
  let len = to - from;
  if (len <= 0) {
    throw new Error('arguments error');
  }
  if (len > 0) {
    return Math.round(Math.random() * len + from);
  }
};

export const isArray = (val) => {
  return Object.prototype.toString.call(val) === '[object Array]'
}