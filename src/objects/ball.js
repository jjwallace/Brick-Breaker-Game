class Ball extends Phaser.Sprite {

    constructor(game, x, y, key, angle, speed) {
        super(game, x, y, key);
        this.game.stage.addChild(this);
        this.animations.add('ani');    
        //this.animations.play('ani', 30, true);

        this.anchor.setTo(0.5, 0.5);
        
        game.physics.arcade.enable(this);
        this.enableBody = true;
        
        //this.body.setCircle(20);

        this.angle = angle;
        game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);

        this.body.bounce.set(1);

        this.body.collideWorldBounds = true;
        this.body.onWorldBounds = new Phaser.Signal();
        
        this.game.physics.arcade.checkCollision.down = false;
        this.outOfBoundsKill = true;
        
        var sfxHit = game.add.audio('ball_hit', 100, false);
        
        game.ballGroup.add(this);
        //game.ballGroup.add(this);
        
        function hitWorldBounds (sprite) {
            //sfxHit.play();
            sprite.play('ani');
        }

        //  And then listen for it
        this.body.onWorldBounds.add(hitWorldBounds, this);
        
    }
    
    update() {
        //this.x ++;
    }
}

export default Ball;