import Block from '../objects/block';

class Blocks extends Phaser.Sprite {

    constructor(game, x, y, key) {
        super(game, x, y, key);
        this.game.stage.addChild(this);

        this.x = x;
        this.y = y;

        this.blocks = [];

        //game.time.events.repeat(Phaser.Timer.SECOND / 10, this.maxBalls, addSprite, this);
      
//        var jsonData = JSON.parse(this.game.cache.getText('lvl1'));
//        
//        console.log(jsonData);
        
        for(var i = 0; i < 300; i ++){
            var myX = i * 32
            var myY = this.y
//            if(jsonData.layers.data[i] == 0){
//                this.blocks[i] = new Block(this.game, myX, myY, 'block', 10, 1, i);
//                this.blocks[i].destroy();
//            }else{
                this.blocks[i] = new Block(this.game, myX, myY, 'block', 10, 1, i);
//            }
            
        }
        this.game.blockGroup.align(20, -1, 32, 32);

    }

    update(){

    }

}

export default Blocks;