import Cannon from '../objects/cannon';
import Balls from '../objects/balls';

class DragObj extends Phaser.Sprite {

    constructor(game, x, y) {
        super(game, x, y);
        this.game.stage.addChild(this);
        
        this.arrowX = this.game.world.centerX;
        this.arrowY = this.game.world.height - 100;
        
        this.arrow = new Cannon(this.game, this.arrowX, this.arrowY, 'arrow');

        this.sprite = game.add.sprite(x, y, 'btn_drag');
        this.sprite.anchor.set(0.5, 1);

        this.sprite.inputEnabled = true;
        this.sprite.input.enableDrag();
        this.sprite.events.onDragStart.add(onDragStart, this);
        this.sprite.events.onDragStop.add(onDragStop, this);
        
        this.sprite.input.allowVerticalDrag = false;
        
        function onDown(sprite, pointer) {
            
        }

        function onDragStart(sprite, pointer) {
            
        }

        function onDragStop(sprite, pointer) {
            var speed = 600;
            var angle = this.arrow.angle;
            var myBalls = new Balls(this.game, this.arrow.x, this.arrow.y, 'blank', angle, speed);
        }
    }

    update() {
        //console.log(this.x - this.sprite.x);
        this.arrow.angle = (this.x - this.sprite.x)/2 - 90;
    }
    
}

export default DragObj;