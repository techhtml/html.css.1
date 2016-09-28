/*
 * 함수 : function
 * 4번째 Type
 * 프로그램에 특정한 동작을 부여해주는 것
 * 함수를 생성하는 부분, 함수를 선언한다 (1)
 * 함수를 사용하는 부분, 함수를 호출한다 (2)
 */

/*
 * 함수를 생성하는 키워드는 function
 * 함수선언문
 */
function callMyName() {
	alert("조은!!!!!!!!!!!!!!!!!!!!!");
}

/*
 * 함수표현식
 * 추천
 * 매개변수 (parameter)
 */
var callYourName = function(name, age) {
	alert(name);
	alert(age);
}
/*
 * 함수를 호출할 때는, 함수명();
 */

// callMyName();
// callYourName("조은", "123456");

/**/

/*
 * 미션 2
 * 버튼을 클릭했을 때 (1)
 * 숫자를 1식 늘립니다 (2)
 * 버튼 3개에 같은 동작을 부여해주세요 (3)
 * var btn1, btn2, btn3;
 * 힌트 : 이벤트를 부여하는 함수를 생성하면?
 */

var btn_1 = document.querySelector(".btn-1");
var btn_2 = document.querySelector(".btn-2");
var btn_3 = document.querySelector(".btn-3");

/*
if(btn_1.className === "btn-1") {
	btn_1.className = "btn-1 on"
} else {
	btn_1.className = "btn-1";
}
*/

var addBtnEvent = function(target) {
	var targetClassName = target.className;
	target.addEventListener("click", function() {
		if(target.className === targetClassName) {
			target.className = targetClassName + " on";
		} else {
			target.className = targetClassName;
		}
	});
}

addBtnEvent(btn_1);
addBtnEvent(btn_2);
addBtnEvent(btn_3);

/*
 * IF문
 * 만약에... XX가 참이라면...... 뭘 하고...
 * 만약에... XX가 거짓이라면..... 뭘 해
 */

var choeun = "조은";

if(choeun === "조은") {
  // 만약 괄호 안의 조건이 참인 경우
	// alert("얘는 조은입니다");
} else {
	// 만약 괄호 안의 조건이 거짓인 경우
	// alert("얘는 조은이 아닙니다")
}






/**/
