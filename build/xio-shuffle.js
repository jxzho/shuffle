'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGlvLXNodWZmbGUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmFuZG9tID0gKGZyb20sIHRvKSA9PiB7XG4gIGxldCBsZW4gPSB0byAtIGZyb207XG4gIGlmIChsZW4gPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIGVycm9yJyk7XG4gIH1cbiAgaWYgKGxlbiA+IDApIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbGVuICsgZnJvbSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbn0iLCJpbXBvcnQgeyByYW5kb20sIGlzQXJyYXkgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHNodWZmbGUgPSAoYXJ5KSA9PiB7XG4gIGlmICh0eXBlb2YgYXJ5ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignc2h1ZmZsZSBmdW5jdGlvbiBhcmd1bWVudHMgaXMgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBpZiAoaXNBcnJheShhcnkpKSB7XG4gICAgbGV0IG5ld0FyeSA9IFtdO1xuICAgIGxldCBzY3JhdGNoID0gQXJyYXkuZnJvbShhcnkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnkubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBsZXQgcm9sbCA9IHJhbmRvbSgxLCBzY3JhdGNoLmxlbmd0aCkgLSAxO1xuICAgICAgbGV0IGdldCA9IHNjcmF0Y2guc3BsaWNlKHJvbGwsIDEpWzBdO1xuICAgICAgbmV3QXJ5LnB1c2goZ2V0KTtcbiAgICB9XG4gICAgbmV3QXJ5LnB1c2goc2NyYXRjaFswXSk7XG5cbiAgICByZXR1cm4gbmV3QXJ5O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignYXJndW1lbnRzIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgQXJyYXknKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJyYW5kb20iLCJmcm9tIiwidG8iLCJsZW4iLCJFcnJvciIsIk1hdGgiLCJyb3VuZCIsImlzQXJyYXkiLCJ2YWwiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzaHVmZmxlIiwiYXJ5IiwibmV3QXJ5Iiwic2NyYXRjaCIsIkFycmF5IiwiaSIsImxlbmd0aCIsInJvbGwiLCJnZXQiLCJzcGxpY2UiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQWM7QUFDbEMsRUFBQSxJQUFJQyxHQUFHLEdBQUdELEVBQUUsR0FBR0QsSUFBZixDQUFBOztBQUNBLEVBQUlFLElBQUFBLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDWixJQUFBLE1BQU0sSUFBSUMsS0FBSixDQUFVLGlCQUFWLENBQU4sQ0FBQTtBQUNELEdBQUE7O0FBQ0QsRUFBSUQsSUFBQUEsR0FBRyxHQUFHLENBQVYsRUFBYTtBQUNYLElBQU9FLE9BQUFBLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNMLE1BQUwsRUFBZ0JHLEdBQUFBLEdBQWhCLEdBQXNCRixJQUFqQyxDQUFQLENBQUE7QUFDRCxHQUFBO0FBQ0YsQ0FSTSxDQUFBO0FBVUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRCxFQUFTO0FBQzlCLEVBQU9DLE9BQUFBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCSixHQUEvQixDQUFBLEtBQXdDLGdCQUEvQyxDQUFBO0FBQ0QsQ0FGTTs7SUNSTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRCxFQUFTO0FBQzlCLEVBQUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsV0FBbkIsRUFBZ0M7QUFDOUIsSUFBQSxNQUFNLElBQUlWLEtBQUosQ0FBVSx5Q0FBVixDQUFOLENBQUE7QUFDRCxHQUFBOztBQUVELEVBQUEsSUFBSUcsT0FBTyxDQUFDTyxHQUFELENBQVgsRUFBa0I7QUFDaEIsSUFBSUMsSUFBQUEsTUFBTSxHQUFHLEVBQWIsQ0FBQTtBQUNBLElBQUEsSUFBSUMsT0FBTyxHQUFHQyxLQUFLLENBQUNoQixJQUFOLENBQVdhLEdBQVgsQ0FBZCxDQUFBOztBQUVBLElBQUEsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixHQUFHLENBQUNLLE1BQUosR0FBYSxDQUFqQyxFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxNQUFJRSxJQUFBQSxJQUFJLEdBQUdwQixNQUFNLENBQUMsQ0FBRCxFQUFJZ0IsT0FBTyxDQUFDRyxNQUFaLENBQU4sR0FBNEIsQ0FBdkMsQ0FBQTtBQUNBLE1BQUlFLElBQUFBLEdBQUcsR0FBR0wsT0FBTyxDQUFDTSxNQUFSLENBQWVGLElBQWYsRUFBcUIsQ0FBckIsQ0FBd0IsQ0FBQSxDQUF4QixDQUFWLENBQUE7QUFDQUwsTUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVlGLEdBQVosQ0FBQSxDQUFBO0FBQ0QsS0FBQTs7QUFDRE4sSUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVlQLE9BQU8sQ0FBQyxDQUFELENBQW5CLENBQUEsQ0FBQTtBQUVBLElBQUEsT0FBT0QsTUFBUCxDQUFBO0FBQ0QsR0FaRCxNQVlPO0FBQ0wsSUFBQSxNQUFNLElBQUlYLEtBQUosQ0FBVSx3Q0FBVixDQUFOLENBQUE7QUFDRCxHQUFBO0FBQ0Y7Ozs7In0=
