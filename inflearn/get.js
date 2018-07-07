// getter?

function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}

var user1 = {
  id: 1,
  name: 'Jay',
  age: 31
};

var user2 = {
  id: 2,
  age: 29
};

console.log(user1.name);
console.log(_get(user1, 'name'));

// console.log(user2.name);
console.log(_get(user2, 'name'));

// curry 이용해서 간소화

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2 ? fn(a, b) : function (b) { return fn(b, a); };
  }
}

var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

console.log(_get('name')(user1));

var get_name = _get('name');
console.log( get_name(user1) );

// map, filter에 적용하기