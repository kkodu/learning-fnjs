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
    list = _rest(list); // 이 부분이 조금 궁금하다.. list 인자도 참조로 이루어져서 외부 값이 변경되는거 아닌가..>?
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}

function add(a, b) {
  return a + b;
}

var list = [1, 2, 3, 4]
console.log(
  _reduce(list, add));
console.log(list);

// 6

// memo = add(0, 1);
// memo = add(memo, 2);
// memo = add(memo, 3);
// return memo;
// add(add(add(0, 1), 2), 3);