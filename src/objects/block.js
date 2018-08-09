class Block extends Phaser.Sprite {

    constructor(game, x, y, key, health, type, id) {
        super(game, x, y, key, health, type, id);
        
        this.x = x;
        this.y = y;
        this.id = id;
        
        this.game = game;
        
        var blockSize = 32;
        var hb = blockSize / 2;
        
        var style = { font: "12px Arial", fill: "#ffffff", align: "center" };
        this.text = game.add.text(hb, hb+2, health, style);
        this.text.stroke = '#000000';
        this.text.strokeThickness = 4;

        this.addChild(this.text);
        
        this.boom = game.add.sprite(hb, hb, 'damage');
        this.boom.anchor.set(0.5);
        this.boom.animations.add('ani');    
        //this.boom.animations.play('ani', 30, true);

        this.addChild(this.boom);

        this.text.anchor.set(0.5);
        
        this.game.stage.addChild(this);
        
        this.health = health;
        this.type = type;
        
        
        this.boomMe = function() {
            this.boom.animations.play('ani', 30, false);
        }.bind(this);
       

        this.anchor.setTo(0, 0);

        game.physics.arcade.enable(this);

        this.body.bounce.set(1);
        this.body.immovable = true;
        //var sfxHit = game.add.audio('ball_hit', 100, false);
        
        this.game.blockGroup.add(this);
        
    }

    
    
    update() {
//        if(this.hit == true){
//            this.hit = false;
//            this.boom.animations.play('ani', 30, true);
//        }
    }
}

export default Block;