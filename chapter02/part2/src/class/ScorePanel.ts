export default class ScorePanel {
    score: number = 0;
    level: number = 1;

    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel        
        this.upScore = upScore
    }

    addScore() {
        this.scoreElement.innerText = ++this.score + ""
        this.score % this.upScore === 0 ? this.levelUp() : null
    }

    levelUp() {
        this.level < this.maxLevel ? this.levelElement.innerText = ++this.level + "" : null
    }
}