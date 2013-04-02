var Example0 = (function () {
    function Example0() { }
    Example0.prototype.setup = function () {
        this.player = new jaws.Sprite({
            image: "images/player.png",
            x: jaws.width / 2,
            y: jaws.height / 2,
            anchor: "center"
        });
    };
    Example0.prototype.update = function () {
        if(jaws.pressed("left")) {
            this.player.x -= 2;
        }
        if(jaws.pressed("right")) {
            this.player.x += 2;
        }
        if(jaws.pressed("up")) {
            this.player.y -= 2;
        }
        if(jaws.pressed("down")) {
            this.player.y += 2;
        }
    };
    Example0.prototype.draw = function () {
        jaws.clear();
        this.player.draw();
    };
    return Example0;
})();
window.onload = function () {
    jaws.assets.add("images/player.png");
    jaws.start(new Example0());
};
