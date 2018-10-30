~function () {
  let xio = function () {};

  /* shufle算法实现 */
  xio.shuffle = function (ary) {
    if (typeof ary === 'undefined') {
      throw new Error('please introduce an array');
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
      throw new Error('arguments type of shuffle is not a function');
    }
      
  };
  
  xio.random = function (from, to) {
    let len = to - from;
    if (len <= 0) {
      throw new Error('arguments of random function error');
      return;
    }
    if (len > 0) {
      return Math.round(Math.random() * len + from);
    }
  };

  window.xio = xio; 
}();
