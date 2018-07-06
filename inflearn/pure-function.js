/* 순수 함수 */

// 동일한 인자에 동일한 리턴값
// 외부에 영향을 미치지 않음
// 조합성이 강함
function add(a, b) {
	return a + b;
}

console.log( add(10, 5) );


// 평가 시점에 따라 영향을 받는 로직
var c = 10;
function add2(a, b) {
	return a + b + c;
}

console.log( add2(10, 2) );
console.log( add2(10, 3) );
console.log( add2(10, 4) );

c = 20;
console.log( add2(10, 2) );
console.log( add2(10, 3) );
console.log( add2(10, 4) );

// 이렇게 결과가 다르게 나오는.. 리턴값이 다른 함수는 순수 함수가 아님

var c = 20;
function add3(a, b) {
	c = b;
	return a + b;
}

// 리턴값은 동일하지만 외부(c)에 영향을 미치므로 순수 함수가 아님

var obj1 = { val: 10 };
function add4(obj, b) {
	obj.val += b;
}
console.log( obj1.val );
add4(obj1, 20);
console.log( obj1.val );

// 인자(객체)의 상태를 변경하기 때문에 순수 함수가 아님


// 다시 순수 함수
var obj1 = { val: 10 };
function add5(obj, b) {
	return { val: obj.val + b }
}

console.log( obj1.val );
add5(obj1, 20);
console.log( obj1.val );

// 외부의 변수를 참조할 뿐, 참조하는 변수의 상태를 변경하지 않는다.
// 또한 obj 형태의 새로운 객체를 리턴



