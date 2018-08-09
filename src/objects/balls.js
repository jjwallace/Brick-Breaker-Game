import Ball from '../objects/ball';

class Balls extends Phaser.Sprite {

    constructor(game, x, y, key, angle, speed ) {
        super(game, x, y, key);
        this.game.stage.addChild(this);
        
        this.x = x;
        this.y = y;
        
        this.speed = speed;
        this.angle = angle;
        this.maxBalls = 50;
        this.ballCount = 0;
        
        this.balls = [];
        
        
        
        game.time.events.repeat(Phaser.Timer.SECOND / 10, this.maxBalls, addSprite, this);
 
        function addSprite() {
            if( this.ballCount < this.maxBalls){
                //console.log(this.ballCount);
                this.balls[this.ballCount] = new Ball(this.game, this.x, this.y, 'ball', this.angle, this.speed);
                this.ballCount ++;
            }
        }
        
    }
    
    update(){
                
    }
    
}

export default Balls;