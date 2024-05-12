
let result;
const a = 2;
const b = 1;
result = a + b < 4 ? "미만" : "이상";

console.log(result);

const login = '경리';

let message = 
(login == '직원') ? '안녕하세요' : 
(login == '임원') ? '환영합니다' : 
(login == '') ? '로그인이 필요합니다' :  'other';

console.log(message);

const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

const confirm = (question) => {
    return 1;
} 

ask(
    "동의하십니까?",
    () => { console.log("동의하셨습니다") }, 
    () => { console.log("취소 버튼을 누르셨습니다") }
);


