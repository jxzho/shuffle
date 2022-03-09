~function () {
  let xio = function () {};

  /* shufle算法实现 */
  xio.shuffle = function (ary) {
    if (typeof ary === 'undefined') {
      throw new Error('arguments is undefiend');
      return;
    }
    if (Object.prototype.toString.call(ary) === '[object Array]') {
      let newAry = [],
          scratch = Array.from(ary);
    
      for (let i = 0; i < ary.length - 1; i++) {
        let roll = this.random(1, scratch.length) - 1;
        let get = scratch.splice(roll, 1)[0];
        newAry.push(get);
      }
      newAry.push(scratch[0]);

      return newAry;
    } else {
      throw new Error('arguments must be an instance of Array');
    }
      
  };
  
  xio.random = function (from, to) {
    let len = to - from;
    if (len <= 0) {
      throw new Error('arguments error');
      return;
    }
    if (len > 0) {
      return Math.round(Math.random() * len + from);
    }
  };

  window.xio = xio; 
}();

xio.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
