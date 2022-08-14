export default class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    get X(): number {
        return this.element.offsetLeft
    }

    get Y(): number {
        return this.element.offsetTop
    }

    reset() {
        this.element.style.left = Math.floor(Math.random() * 43) * 10 + "px"
        this.element.style.top = Math.floor(Math.random() * 37) * 10 + "px"
    }
}