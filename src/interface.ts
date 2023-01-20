/**
 * 객체 형식을 표현할 때 interface 를 사용한다.
 * 그냥 객체로 선언후에 사용하면 Type 정의를 하지 않았다는 에러가 발생한다.
 * ?(optional)의 의미는 써도되고 안써도 된다는 의미를 뜻한다.
 * readonly는 값을 수정할 수는 없고 불러오거나 불러오면서 정의만 가능하다.
 * interface 에 정의한 값들은 타입으로 지정할때 ? 를 제외한 나머지들을 사용해야한다.
 */

type Score = "A" | "B" | "C" | "D";

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [key: number]: Score; // type으로 문자열을 지정해주고 사용하면 type에 정의된 문자만 사용이 가능하다. 대소문자로 구별한다.
  // [key: number]: string; key를 number로 받고 값을 string으로 한다는 의미이다. 여러개를 사용할 수 있다.
}

let user: User = {
  name: "xx",
  age: 30,
  birthYear: 1995,
  1: "A",
  2: "B",
};

/**
 * interface에서는 함수정의도 가능하다.
 */
interface Add {
  (num: number, num2: number): number; // (인자값, 인자값2): 반환타입
}

const add: Add = (x, y) => {
  return x + y;
};

interface isBoolean {
  (age: number): boolean;
}

const year: isBoolean = (year) => {
  return year > 2019;
};

/**
 * interface 에서도 class를 정의할 수 있다.
 */
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("end....");
  }
}

const f: Bmw = new Bmw("red");
console.log("f :: ", f);
f.start();

/**
 * interface에서 확장도 가능하다.
 */

interface Kia extends Car {
  door: number;
  stop(): void;
}

const DAMkia: Kia = {
  door: 4,
  stop() {
    console.log("DAMkia stop...!");
  },
  color: "red",
  wheels: 4,
  start() {
    console.log("DAMkia start...!");
  },
};

console.log("kiDAMkiaa :: ", DAMkia);
DAMkia.start();
DAMkia.stop();

/**
 * 여러개의 interface 확장도 가능하다.
 */

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}

const tc: ToyCar = {
  color: "blue",
  wheels: 5,
  start() {
    console.log("tc start 1 ! ! ! ! ");
  },
  name: "ToyCar",
  price: 1000000,
};

console.log(tc);
tc.start();
