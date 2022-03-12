var XioShuffle = (function (exports) {
  'use strict';

  var random = function random(from, to) {
    var len = to - from;

    if (len <= 0) {
      throw new Error('arguments error');
    }

    if (len > 0) {
      return Math.round(Math.random() * len + from);
    }
  };
  var isArray = function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
  };

  var shuffle = function shuffle(ary) {
    if (typeof ary === 'undefined') {
      throw new Error('shuffle function arguments is undefined');
    }

    if (isArray(ary)) {
      var newAry = [];
      var scratch = Array.from(ary);

      for (var i = 0; i < ary.length - 1; i++) {
        var roll = random(1, scratch.length) - 1;
        var get = scratch.splice(roll, 1)[0];
        newAry.push(get);
      }

      newAry.push(scratch[0]);
      return newAry;
    } else {
      throw new Error('arguments must be an instance of Array');
    }
  };

  exports.shuffle = shuffle;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGlvLXNodWZmbGUuaWlmZS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3V0aWxzLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByYW5kb20gPSAoZnJvbSwgdG8pID0+IHtcbiAgbGV0IGxlbiA9IHRvIC0gZnJvbTtcbiAgaWYgKGxlbiA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgZXJyb3InKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBsZW4gKyBmcm9tKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsKSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xufSIsImltcG9ydCB7IHJhbmRvbSwgaXNBcnJheSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnkpID0+IHtcbiAgaWYgKHR5cGVvZiBhcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzaHVmZmxlIGZ1bmN0aW9uIGFyZ3VtZW50cyBpcyB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KGFyeSkpIHtcbiAgICBsZXQgbmV3QXJ5ID0gW107XG4gICAgbGV0IHNjcmF0Y2ggPSBBcnJheS5mcm9tKGFyeSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyeS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGxldCByb2xsID0gcmFuZG9tKDEsIHNjcmF0Y2gubGVuZ3RoKSAtIDE7XG4gICAgICBsZXQgZ2V0ID0gc2NyYXRjaC5zcGxpY2Uocm9sbCwgMSlbMF07XG4gICAgICBuZXdBcnkucHVzaChnZXQpO1xuICAgIH1cbiAgICBuZXdBcnkucHVzaChzY3JhdGNoWzBdKTtcblxuICAgIHJldHVybiBuZXdBcnk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBBcnJheScpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInJhbmRvbSIsImZyb20iLCJ0byIsImxlbiIsIkVycm9yIiwiTWF0aCIsInJvdW5kIiwiaXNBcnJheSIsInZhbCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNodWZmbGUiLCJhcnkiLCJuZXdBcnkiLCJzY3JhdGNoIiwiQXJyYXkiLCJpIiwibGVuZ3RoIiwicm9sbCIsImdldCIsInNwbGljZSIsInB1c2giXSwibWFwcGluZ3MiOiI7OztFQUFPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFjO0VBQ2xDLEVBQUEsSUFBSUMsR0FBRyxHQUFHRCxFQUFFLEdBQUdELElBQWYsQ0FBQTs7RUFDQSxFQUFJRSxJQUFBQSxHQUFHLElBQUksQ0FBWCxFQUFjO0VBQ1osSUFBQSxNQUFNLElBQUlDLEtBQUosQ0FBVSxpQkFBVixDQUFOLENBQUE7RUFDRCxHQUFBOztFQUNELEVBQUlELElBQUFBLEdBQUcsR0FBRyxDQUFWLEVBQWE7RUFDWCxJQUFPRSxPQUFBQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDTCxNQUFMLEVBQWdCRyxHQUFBQSxHQUFoQixHQUFzQkYsSUFBakMsQ0FBUCxDQUFBO0VBQ0QsR0FBQTtFQUNGLENBUk0sQ0FBQTtFQVVBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBUztFQUM5QixFQUFPQyxPQUFBQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosR0FBL0IsQ0FBQSxLQUF3QyxnQkFBL0MsQ0FBQTtFQUNELENBRk07O01DUk1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBUztFQUM5QixFQUFBLElBQUksT0FBT0EsR0FBUCxLQUFlLFdBQW5CLEVBQWdDO0VBQzlCLElBQUEsTUFBTSxJQUFJVixLQUFKLENBQVUseUNBQVYsQ0FBTixDQUFBO0VBQ0QsR0FBQTs7RUFFRCxFQUFBLElBQUlHLE9BQU8sQ0FBQ08sR0FBRCxDQUFYLEVBQWtCO0VBQ2hCLElBQUlDLElBQUFBLE1BQU0sR0FBRyxFQUFiLENBQUE7RUFDQSxJQUFBLElBQUlDLE9BQU8sR0FBR0MsS0FBSyxDQUFDaEIsSUFBTixDQUFXYSxHQUFYLENBQWQsQ0FBQTs7RUFFQSxJQUFBLEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osR0FBRyxDQUFDSyxNQUFKLEdBQWEsQ0FBakMsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7RUFDdkMsTUFBSUUsSUFBQUEsSUFBSSxHQUFHcEIsTUFBTSxDQUFDLENBQUQsRUFBSWdCLE9BQU8sQ0FBQ0csTUFBWixDQUFOLEdBQTRCLENBQXZDLENBQUE7RUFDQSxNQUFJRSxJQUFBQSxHQUFHLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlRixJQUFmLEVBQXFCLENBQXJCLENBQXdCLENBQUEsQ0FBeEIsQ0FBVixDQUFBO0VBQ0FMLE1BQUFBLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZRixHQUFaLENBQUEsQ0FBQTtFQUNELEtBQUE7O0VBQ0ROLElBQUFBLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZUCxPQUFPLENBQUMsQ0FBRCxDQUFuQixDQUFBLENBQUE7RUFFQSxJQUFBLE9BQU9ELE1BQVAsQ0FBQTtFQUNELEdBWkQsTUFZTztFQUNMLElBQUEsTUFBTSxJQUFJWCxLQUFKLENBQVUsd0NBQVYsQ0FBTixDQUFBO0VBQ0QsR0FBQTtFQUNGOzs7Ozs7Ozs7Ozs7In0=