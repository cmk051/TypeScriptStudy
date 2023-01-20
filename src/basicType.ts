/** string Type */
let car: string = "bmw";

/** number Type */
let age: number = 30;

/** boolean Type */
let isLoggedIn: boolean = false;

/** Array
 * 해당 type과 맞지 않는 값을 넣으면 오류 ex) let b: number[] = ["1", "2", "3"]
 */
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3]; // 위에 있는 방식과 같다.

/**
 * Tuple
 * 같은 배열안에서 타입이 다를때 사용을 한다.
 * 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미한다.
 * 정의하지 않은 타입, 인덱스로 접근할 경우 오류를 발생한다.
 */
let b: [string, number];

/**
 * Any
 * 모든 타입에 대해서 허용한다는 의미를 가진다.
 */
let str: any = "hi";
let num: any = 10;
let arr: any = ["a", 2, true];

/**
 * void
 * 아무것도 반환하지 않을 경우 사용한다.
 */
function Hellow(): void {
  console.log("hello");
}

/**
 * never
 * 영원히 끝나지 않는 타입이거나, 에러가 발생하는 함수에서 사용된다.
 */

// function showError(): never {
//   throw new Error();
// }

// function infLoop(): never {
//   while (true) {
//     // do something
//   }
// }

/**
 * enum
 * 비슷한 값들끼리 묶을 때 사용한다.
 * 직접 값을 할당하지 않으면 default로 0이 할당이 된다.
 * number type 은 양방향으로 가능하지만 string 타입은 단방향만 가능하다.
 */
enum Os {
  Window,
  Ios = 10,
  Android,
}

// 변수 뒤에 enum 을 타입으로 지정해주면 해당 값만 입력이 가능하다.
let testOs: Os;
testOs = Os.Android;

enum myOs {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

console.log(Os.Ios);
console.log(Os[10]);
console.log("----------문자형-----------");
console.log(myOs.Window);
// console.log(myOs.[win])

/**
 * null, undefined
 */
let c: null = null;
let d: undefined = undefined;
console.log("c :: ", c);
console.log("d :: ", d);
