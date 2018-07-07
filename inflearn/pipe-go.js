// reduce 이용
function _each(list, iter) {
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}
var slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}
function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list); 
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}

// 함수를 인자로 받아서 이를 연속적으로 실행시켜주는 함수
// 함수를 리턴하는 함수 [연속적인]
function _pipe() {
  var fns = arguments;
  return function (arg) {
    return _reduce(fns, function(arg, fn) {
      return fn(arg);
    }, arg);
  }
}

var f1 = _pipe(
  function (a) { return a + 1; }, // 1 + 1
  function (a) { return a * 2; }  // 2 * 2
);

console.log( f1(1) );

// _go
// 즉시 실행되는 pipe 함수
function _go(arg) {
  var fns = _rest(arguments);
  _pipe.apply(null, fns)(arg);
}

_go(1,
  function (a) { return a + 1; },
  function (a) { return a * 2; },
  function (a) { return a * a; },
  console.log);