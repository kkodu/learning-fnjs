function _curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    }
  }
}

// 축약 표현
function _curryMin(fn) {
  return function (a, b) {
    return arguments.length == 2 ? fn(a, b) : function (b) { return fn(a, b); };
  }
}

var add = function (a, b) {
  return a + b;
};

console.log( add(10, 5) );

var add_curry = _curry(function (a, b) {
  return a + b;
});

var add10 = add_curry(10);
console.log( add10(5) );
console.log( add_curry(5)(3) );

var sub = _curryMin(function (a, b) {
  return a - b;
});

console.log( sub(10, 5) );

var sub10 = sub(10);
console.log( sub10(5) );

// 문맥이 어색 -> curryr (curry right) 함수 만듬

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2 ? fn(a, b) : function (b) { return fn(b, a); };
  }
}

var subr = _curryr(function (a, b) {
  return a - b;
});

console.log( subr(10, 5) );

var subr10 = subr(10);
console.log( subr10(5) );
