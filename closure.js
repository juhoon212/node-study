function closure() {
    let count = 0;

    function addCount() {
        count++;
    }
    
    function print() {
        console.log(count);
    }
    return {
        print,
        addCount
    }
}

const closureFn = closure();
console.log(closureFn);
closureFn.addCount();
closureFn.print();