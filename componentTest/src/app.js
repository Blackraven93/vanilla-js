import Items from "./components/Items.js";

class App {
    constructor() {
        const app = document.querySelector('#app');
        new Items(app);
    }
}

new App();

new App();

// ES Module의 entry file