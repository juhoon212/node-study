const a = (x,y) => ({x, y}); // 객체를 바로 리턴하는 경우는 소괄호를 꼭 넣어줘야 한다.
// 왜냐하면 엔진이 {} 이것이 객체의 리터럴인지, 함수의 body를 말하는건지 모르기 때문.

const result = a(
    {
        name : '윤주훈',
        age : 1
    },
    {
        name : '홍길동',
        age: 2
    }
);

console.log(result);


