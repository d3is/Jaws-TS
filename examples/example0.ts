/// <reference path="../def/jaws.d.ts" />

// Helper Class for Game States
interface IGameState {
    setup(): void;
    update(): void;
    draw(): void;
}

class Example0 implements IGameState {

    player: Sprite;

    setup() {
        this.player = new jaws.Sprite({ image: "images/player.png", x: jaws.width / 2, y: jaws.height / 2, anchor: "center" });
    }

    update() {
        if (jaws.pressed("left")) { this.player.x -= 2 }
        if (jaws.pressed("right")) { this.player.x += 2 }
        if (jaws.pressed("up")) { this.player.y -= 2 }
        if (jaws.pressed("down")) { this.player.y += 2 }
    }

    draw() {
        jaws.clear();
        this.player.draw();
    }
}

window.onload = () => {
    jaws.assets.add("images/player.png");
    jaws.start(new Example0());
};