// const app = document.getElementById('app');

// let state = {
//     items: ['item1', 'item2', 'item3', 'item4']
// }

// const setState = (newState) => {
//     state = { ...state, ...newState };
//     render()
// }

// const render = () => {
//     const {items} = state;

//     app.innerHTML = `
//     <ul>
//         ${items.map(item => `<li>${item}</li>\n`).join('')}
//     </ul>
//     <button id="append">추가</button>
//     `;
//     document.querySelector('#append').addEventListener('click', () => {
//         setState({items: [...items, `item${items.length + 1}`] })
//     })
// }

// render();

// render 함수의 역할은 뭐지??

// const app = document.getElementById('app');


// state 결국 데이터 값을 변화 시킴
// let state = {
//     items : 0
// }


// // 상태 값이 바뀌는 로직
// const setState = (newState) => {
//     state.items = state.items + newState
//     // 상태 값이 바뀌고 출력
//     render()
// }


// // 출력 로직
// const render = () => {
//     const {items} = state;

//     app.innerHTML = `
//     <h1>${items}</h1>
//     <button id="plus">Plus</button>
//     <button id="minus">Minus</button>
//     `;
    
//     const plus = document.getElementById('plus')
//     const minus = document.getElementById('minus')

//     // 렌더링 시 이벤트 로직
//     const handlePlus = () => {
//         setState(1)
//     }

//     const handleMinus = () => {
//         setState(-1)
//     }

//     plus.addEventListener('click', handlePlus)
//     minus.addEventListener('click', handleMinus)
// }

// render()

// 핵심!
// 이런 규칙을 지켜라
// 기능 구현
// state가 변경되면 render를 실행한다.
// state는 setState로만 변경해야 한다.


// 추상화

class Component {
    target;
    state;
    constructor (target) {
        this.target = target;
        this.setup();
        this.render();
    }

    setup () {};
    template () { return ''; }
    render () {
        this.target.innerHTML = this.template();
        this.setEvent()
    }

    setEvent () {}
    setState (newState) {
        this.state = { ...this.state, ...newState};
        this.render();
    }
}

class App extends Component {
    setup () {
        this.state = { items: ['item1', 'item2']};
    }

    template () {
        const {items} = this.state;
        return `
        <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button>추가</button>
        `
    }
    setEvent () {
        this.target.querySelector('button').addEventListener('click', () => {
            const { items } = this.state;
            this.setState({items: [...items, `item${items.length + 1}`]});
        });
    }
}

new App(document.querySelector('#app'));

// class Component {
//     $target;
//     $state;
//     constructor ($target) { 
//       this.$target = $target;
//       this.setup();
//       this.render();
//     }
//     setup () {};
//     template () { return ''; }
//     render () {
//       this.$target.innerHTML = this.template();
//       this.setEvent();
//     }
//     setEvent () {}
//     setState (newState) {
//       this.$state = { ...this.$state, ...newState };
//       this.render();
//     }
//   }
  
//   class App extends Component {
//     setup () {
//       this.$state = { items: ['item1', 'item2'] };
//     }
//     template () {
//       const { items } = this.$state;
//       return `
//           <ul>
//             ${items.map(item => `<li>${item}</li>`).join('')}
//           </ul>
//           <button>추가</button>
//       `
//     }
    
//     setEvent () {
//       this.$target.querySelector('button').addEventListener('click', () => {
//         const { items } = this.$state;
//         this.setState({ items: [ ...items, `item${items.length + 1}` ] });
//       }); 
//     }
//   }
  
//   new App(document.querySelector('#app'));