/**
 * 객체 형식을 표현할 때 interface 를 사용한다.
 * 그냥 객체로 선언후에 사용하면 Type 정의를 하지 않았다는 에러가 발생한다.
 * ?(optional)의 의미는 써도되고 안써도 된다는 의미를 뜻한다.
 * readonly는 값을 수정할 수는 없고 불러오는 것만 가능하다.
 */
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "xx",
  age: 30,
};
