// name필드 오버라이딩
class Animal {
    name = 'animal'
    constructor() {
        alert(this.name); // (*)
    }
}

class Rabbit extends Animal {
    name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal




// 메서드 오버라이딩
class Animal {
showName() {  // this.name = 'animal' 대신 메서드 사용
    alert('animal');
}

constructor() {
    this.showName(); // alert(this.name); 대신 메서드 호출
}
}

class Rabbit extends Animal {
showName() {
    alert('rabbit');
}
}

new Animal(); // animal
new Rabbit(); // rabbit

// https://ko.javascript.info/class-inheritance