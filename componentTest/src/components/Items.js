import Component from "../core/Components.js";

export default class Items extends Component {
    setUp() {
        this.state = {items: ['item1', 'item2']};
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
            this.setState({items: [...items, `item${items.length + 1}`]})
        })
    }
}

/*
구현에 필요한 코어들
*/