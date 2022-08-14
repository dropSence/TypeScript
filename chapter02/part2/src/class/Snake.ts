export default class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;

    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div')!;
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (value < 0 || value > 430) throw new Error('寄')
        if ((this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft) === value) {
            value = value > this.X ? this.X - 10 : this.X + 10
        }
        this.moveX()
        this.head.style.left = value + "px"
    }

    set Y(value: number) {
        if (value < 0 || value > 370) throw new Error('寄')
        // if ((this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop) === value) {
        //     value = value > this.Y ? this.Y - 10 : this.Y + 10
        // }
        this.moveY()
        this.head.style.top = value + "px"
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    moveX() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            (this.bodies[i] as HTMLElement).style.left = X + "px";
        }
    }

    moveY() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.top = Y + "px";
        }
    }


}