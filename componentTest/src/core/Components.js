export default class Component {
    constructor (target) {
        this.target = target;
        this.setUp();
        this.render();
    }

    setUp () {};
    template () {return ''; }
    render () {
        this.target.innerHTML = this.template();
        this.setEvent();
    }

    setEvent() {}
    setState (newState) {
        this.state = { ...this.state, ...newState};
        this.render()
    }
}



// 관계를 조금 그려보자

/*
각각 역할 협력 책임
역할
App
1. 재료를 외부에서 받는다.
2. 그 재료를 items에게 전달해준다.

Items
1. setUp 함수를 실행하여 items들을 전달한다.
2. template 함수를 실행하여 items에 있는 값들을 랜더링 해준다.
3. setEvent 함수를 실행하여 버튼을 누르면 item에 1을 더한 값을 추가해준다.

Component
1. constructor 생성자를 통해 필요한 값들을 정의한다.
   - 여기서 굉장히 중요한 부분은 필드 값들은 부모 객체가 실행
   - 메소드는 자식 객체에서도 실행 가능하다.
2. setUp, setEvent 행동들은 정의만 해놓는다.
3. template에는 빈값을 렌더링해준다. (객체가 생성되기 전에는 아무것도없음)
4. render 함수는 

*/