function first() {
    second();
    console.log('첫 번쨰');
}

function second() {
    third();
    console.log("두 번쨰");
}

function third() {
    console.log('세 번쨰');
}

first(); // => first() => second() => third() 
         // stack에 쌓임 LIFO 이므로 third => second => first 
         // expect : 세 번쨰, 두 번쨰, 첫 번쨰
         // promise가 타이머 보다 우선순위를 갖는다.(then,catch, process.nextTick)


/* lexical scope */

let x = 1;

function print() {
    console.log(x);
}

function dummy() {
    let x = 999;
    print();
}

dummy();


