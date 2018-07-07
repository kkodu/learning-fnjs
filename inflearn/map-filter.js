var users = [
	{ id: 1, name: 'ID', age: 36 },
	{ id: 2, name: 'BJ', age: 32 },
	{ id: 3, name: 'JM', age: 32 },
	{ id: 4, name: 'PJ', age: 27 },
	{ id: 5, name: 'HA', age: 25 },
	{ id: 6, name: 'JE', age: 26 },
	{ id: 7, name: 'JI', age: 31 },
	{ id: 8, name: 'MP', age: 23 }
];

// 1. 명령형 코드
var temp_users = [];
for (var i = 0; i < users.length; i++) {
	if (users[i].age >= 30) {
		temp_users.push(users[i]);
	}
}
console.log(temp_users);

var names = [];
for (var i = 0; i < temp_users.length; i++) {
	names.push(temp_users[i].name);
}
console.log(names);

//
var temp_users = [];
for (var i = 0; i < users.length; i++) {
	if (users[i].age < 30) {
		temp_users.push(users[i])
	}
}
console.log(temp_users);

var ages = [];
for (var i = 0; i < temp_users.length; i++) {
	ages.push(temp_users[i].age);
}
console.log(ages);

// 2. _filter로 리펙토링
function _filter(users, predi) {
	var new_list = [];
	for (var i = 0; i < users.length; i++) {
		if (predi(users[i])) {
			new_list.push(users[i]);
		}
	}
	return new_list;
}

console.log(
	_filter(users, function (user) { return user.age >= 30; }));

console.log(
	_filter(users, function (user) { return user.age < 30; }));

console.log(
	_filter([1, 2, 3, 4], function (num) { return num % 2; }));

console.log(
	_filter([1, 2, 3, 4], function (num) { return !(num % 2); }));

// 3. _map으로 리펙토링
// 내부에 데이터 형식에 대해 전혀 알 수 없다. 다형성과 재사용성이 높아
function _map(list, mapper) {
	var new_list = [];
	for (var i = 0; i < list.length; i++) {
		new_list.push(mapper(list[i]));
	}
	return new_list;
}

var over_30 = _filter(users, function (user) { return user.age >= 30 });
console.log(over_30);

var names = _map(over_30, function (user) {
	return user.name;
});
console.log(names);

var under_30 = _filter(users, function (user) { return user.age < 30 });
console.log(under_30);

var ages = _map(under_30, function (user) {
	return user.age;
});
console.log(ages);

console.log(
	_map([1, 2, 3], function (num) { return num * 2 }));

// 중첩문

console.log(
	_map(
		_filter(users, function (user) { return user.age >= 30; }),
		function (user) { return user.name; }));


// _get 적용하기

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2 ? fn(a, b) : function (b) { return fn(b, a); };
  }
}

var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

console.log(
	_map(
		_filter(users, function (user) { return user.age >= 30}),
		_get('name')));

console.log(
	_map(
		_filter(users, function (user) { return user.age < 30; }),
		_get('age')));