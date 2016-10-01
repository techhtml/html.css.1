// 자바스크립트 공부는 어떻게 해야할까?

// 책 추천
// 프론트엔드 개발자를 위한 자바스크립트 프로그래밍
// 자바스크립트 핵심가이드

// 개념
// 키워드 (예약어)
// for, if, var

// 변수를 나타내기 위한 키워드 : var
// 변수의 크기는 데이터의 크기에 따라 다름
var person = "조은";

// 자료형
// 메모리 과부하를 줄이기 위해, 더 이상 사용하지 않는 변수는 null로 지정하는 게 좋다.
var age = 36; // 숫자 (Number, 숫자 / 64비트 부동소수점)
var name = "조은"; // 문자열 (String, 문자의 집합)
var isMale = true; // 불린 (boolean, 참 / 거짓 판별)
var emptyValue = undefined; // 미정의 (undefined / 변수는 선언되었으나, 아직 값이 들어가지 않은 상태)
var nullValue = null; // 없음 (null / 변수가 선언되었으나, 그 내부의 값이 명시적으로 비어있는 상태)

// 함수
// 동작 부여
// 함수를 만드는 방법

// 1. 함수선언문
// function 함수명(매개변수들) {
//   동작
// }
// 함수명은 변수명과 동일하게 사용해도 됨
// 매개변수(파라미터)는 무제한
// 동작 내부도 무제한
// (매개변수나 함수 내부에서 선언한 변수)는 해당 함수 내에서만 사용 가능하다.

// 전역변수 (Global)
var x = 1000;
var y = 2000;

function move(posX, posY) {
	// 함수 내에서 var 키워드를 사용한 변수
	// 지역변수 (Local)
	// 지역변수와 전역변수는 서로 다른 공간에 존재함
	var x = posX;
	var y = posY;
	console.log("X축 : " + x,"Y축 : " + y); // X: ?, Y: ?
  // 동작 (do something)
};

move(50, 100);

console.log("X축 : " + x,"Y축 : " + y); // X: ?, Y: ?

// 2. 함수표현식
// var 함수명 = function(매개변수들) {
//   동작
// }
var isTrue = function() {

};
isTrue();

// 끌어올린다, 호이스팅, hoisting
// 자바스크립트 내에 존재하는 함수, 변수는 자바스크립트 상 어떤 곳에서든 사용 가능해야 한다는
// 전제 하에 동작

// 객체
// 현실상에 존재하는 모든 것이 객체다
// 특정한 대상을 지칭하는 것 (Object, 객체)

var choeun = {
	"name": "조은",
	"age": 36,
	"desc": "안녕하세요. 조은입니다."
};

var desk = {
	"boxboard": "wood",
	"frame": "steal",
	"regsCount": 4,
	"size": {
		"width": 1280,
		"height": 400,
		"units": "cm"
	},
	"changeBoxBoard": function(material) {
		this.boxboard = material;
	}
};
var stealDesk = {
	"boxboard": "steal",
	"frame": "wood",
	"regsCount": 4,
	"size": {
		"width": 600,
		"height": 600,
		"units": "cm"
	},
	"changeBoxBoard": function(material) {
		this.boxboard = material;
	}
};

console.log(desk.boxboard, desk.size.width);
desk.changeBoxBoard("diamond");
console.log(desk.boxboard);

console.log(stealDesk.boxboard);
stealDesk.changeBoxBoard("wood");
console.log(stealDesk.boxboard);

var IU = {
	"name": "이지은",
	"job": "가수",
	"birth": "1993년 5월 16일",
	"body": "161.8cm 44kg",
	"company": [{
		"name": "로엔엔터테인먼트",
		"site": ""
	},{
		"name": "페이브엔터테인먼트",
		"site": ""
	}]
};

// 배열
// 데이터들의 집합
var persons = ["조은","치킨","맥주","라면"];
persons[0]; // 조은
persons[1]; // 치킨




// End
