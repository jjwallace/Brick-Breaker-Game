

import DragObj from '../objects/drag.obj';
import Block from '../objects/block';
import Blocks from '../objects/blocks';

import Burst from '../objects/burst';

class MainState extends Phaser.State {

    preload() {
        //this.game.load.json('lvl1', './src/assets/maps/lvl1.json');
    }

    create() {
        //  Set-up the physics body
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.game.ballGroup = this.game.add.group();
        this.game.blockGroup = this.game.add.group();
        
        //this.game.physics.arcade.gravity.y = 200;
        
        this.game.ballGroup.enableBody = true;
        this.game.blockGroup.enableBody = true;
        
//        this.game.ballGroup.bounce.setTo(1);
//        this.game.blockGroup.bounce.setTo(1);
        
        this.game.physics.arcade.enable(this.game.ballGroup);
        this.game.physics.arcade.enable(this.game.blockGroup);
        
        var myblocks = new Blocks(this.game, this.game.world.centerX, this.game.world.centerY, 'blank');
        
        var dragObject = new DragObj(this.game, this.game.world.centerX, this.game.world.height);
        
    }
    
    update(){
        function ballHitBrick(ball, brick) {
           
            brick.health -= 1;
            brick.boomMe();
            brick.text.setText(brick.health);
            if(brick.health <= 0){
                console.log('Block ' + brick.id + ' Destroyed X:' + brick.x + ' Y:' + brick.y);
                new Burst(brick.game, brick.x, brick.y, 'boom');
                brick.text.setText('');
                brick.destroy();
                
            }
            
        }
        
        this.game.physics.arcade.collide(this.game.ballGroup, this.game.blockGroup,ballHitBrick);
    }

}

export default MainState;