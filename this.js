
// 메서드 : 객체 내의 프로퍼티의 함수
// this : 메서드가 있는 현재 객체.

const relationship = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        const that = this; //relationship을 가리키는 this를 that에 저장 => function의 this는 부모가 다름.
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        })
    }
}

relationship.logFriends();

console.log("===================");

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(
            friend => {
                console.log(this.name, friend); // 화살표 함수에서의 this는 현재의 객체를 나타냄.
            }
        )    
    }
}

relationship2.logFriends();

