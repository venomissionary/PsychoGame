import Player from './Prefabs/Player.js';
import Menu from './Menu.js';
 class Level_3 extends Phaser.Scene {
    constructor() {
        super('Level_3');

    }

    preload() {

        this.load.image('tileset_3', 'assets/lvlassets/Level_3/Mansion.png');
        this.load.tilemapTiledJSON('levelData_M', 'assets/lvlassets/Level_3/Mansion.JSON');

        this.load.spritesheet('MarionPlayer', 'assets/lvlassets/Characters/Marion7.png', {
            frameWidth: 46,
            frameHeight: 80,
            endFrame: 16
        });

        this.load.image("BatesHead", 'assets/lvlassets/Bates.png');
        this.load.image('ItemText', 'assets/lvlassets/Item_Text.png' );
        this.load.image('Health', 'assets/lvlassets/Health_Text.png');
        this.load.image('Lives', 'assets/lvlassets/heart.png');
        this.load.image('evidence', 'assets/lvlassets/Level_3/paper.png');
        this.load.image('evidence_stats', 'assets/lvlassets/Level_3/paper_2.png');
        this.load.image('text', 'assets/lvlassets/Level_3/text.png');
        this.load.image("luggage", 'assets/lvlassets/Level_1/Cash.png');
        this.load.audio("JumpScare_1", 'assets/lvlassets/Level_3/JumpScare.mp3');

        this.load.image('speech_bubble2', 'assets/lvlassets/Level_3/bubble2.png');

        this.load.audio('scary', 'assets/lvlassets/Level_3/eerie_ambiance.mp3');
        this.load.audio('crinkle', 'assets/lvlassets/Level_3/Paper_crinkle.mp3');


    }


    create() {
//==========================================================================================================
//effect and sounds
       this.cameras.main.fadeIn(1000,0,0,0);
       this.sound.play('scary', { loop: true, volume: 0.5});
//==========================================================================================================
//speech bubble will spawn and fade away. 

       this.SpeechBubble = this.add.image(1000, 500, 'speech_bubble2').setDepth(6).setScale(0.6).setScrollFactor(0);
       this.tweens.add({
        targets: this.SpeechBubble,
        alpha: 0,
        delay: 5000,
        duration: 1000, 
        ease: 'Linear',
        onComplete: () => {
            this.SpeechBubble.destroy();
        }
       });

//==========================================================================================================    
//Player camera is called to follow the player in the map. 
        this.Player = new Player(this, this.cameras.main.centerX, this.cameras.main.centerY, this.cameras.main).setOrigin(11,-1.8).setScale(1).setDepth(3);
        this.cameras.main.setOrigin(0.8,0.4)
        this.cameras.main.startFollow(this.Player);
//==========================================================================================================
//==========================================================================================================     
//tilemaps collisions and stats bar.

       const Mansion_Map = this.make.tilemap({key: 'levelData_M', tilewidth: 16, tileheight: 16});
       const M_tileset = Mansion_Map.addTilesetImage('Mansion', 'tileset_3');
       this.Floor_M = Mansion_Map.createLayer('Floor', M_tileset, -400,200).setScale(3);
       this.Walls_M = Mansion_Map.createLayer('Walls', M_tileset, -400, 200).setScale(3);
       this.Objects_M = Mansion_Map.createLayer('Objects', M_tileset, -400,200).setScale(3);

       this.physics.world.setBounds(0, 0, Mansion_Map.widthInPixels, Mansion_Map.heightInPixels);
       this.Walls_M.setCollisionByExclusion([-1]);
       this.Objects_M.setCollisionByExclusion([-1]);
       this.physics.add.collider(this.Player, this.Walls_M);
       this.physics.add.collider(this.Player, this.Objects_M) 
       this.stat = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'evidence_stats').setAlpha(0.5).setOrigin(-5, -1).setDepth(3).setScrollFactor(0).setScale(2);
       this.statbar = this.add.graphics().fillStyle(0x1A1A1A, 1).fill().fillRect(1400,0,2000,2000).setDepth(2).setScrollFactor(0);
       this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'text').setAlpha(0.5).setOrigin(-8.5, -5).setDepth(6).setScrollFactor(0);
       this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ItemText').setDepth(4).setScale(0.7).setOrigin(-1.25,0).setScrollFactor(0);
       this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ItemText').setDepth(4).setScale(0.7).setOrigin(-1.25,0).setScrollFactor(0);

 //==========================================================================================================
//==========================================================================================================
//paper collectable will appear on the ground once all have been equipped then thats paper stats bar opacity updates to 1. and equiping makes a sound.     

        this.paper_amount = 0;
        const paperCollision_group = this.physics.add.group();
        const paper1 = this.add.image(0, 0, 'evidence').setScale(1.0).setDepth(1).setOrigin(-4,-8);
        this.physics.world.enable(paper1);
        paperCollision_group.add(paper1);
        
        const paper2 = this.add.image(0, 0, 'evidence').setScale(1.0).setDepth(1).setOrigin(-1,-12);
        this.physics.world.enable(paper2);
        paperCollision_group.add(paper2);

        const paper3 = this.add.image(0, 0, 'evidence').setScale(1.0).setDepth(1).setOrigin(-11, -6);
        this.physics.world.enable(paper3);
        paperCollision_group.add(paper3);
       
        const paper4 = this.add.image(0, 0, 'evidence').setScale(1.0).setDepth(1).setOrigin(-11, -10);
        this.physics.world.enable(paper4);
        paperCollision_group.add(paper4);
       
        const paper5 = this.add.image(0, 0, 'evidence').setScale(1.0).setDepth(1).setOrigin(-11, -16);
        this.physics.world.enable(paper5);
        paperCollision_group.add(paper5);

        this.physics.add.collider(this.Player, paperCollision_group, (Player, paper) => {
            paper.destroy();
            this.sound.play('crinkle');
            this.paper_amount++;

            if (this.paper_amount === 5) {
                this.stat.setAlpha(1);
                this.sound.stopAll();
                this.cameras.main.fadeOut(1000,0,0,0);
                setTimeout(() => {
                    this.sound.stopAll();
                    this.scene.start('Cutscene4');
                }, 2000)
            }
        }, null, this);
        this.clocktimer();


    }
//==========================================================================================================
//==========================================================================================================

//jumpscare 

    scare() {
        const Bates_jumpscare = this.add.image(1400,700, 'BatesHead').setDepth(8).setVisible(false).setScale(4).setScrollFactor(0);
        const activateJumpscare = () => {
            Bates_jumpscare.setVisible(true);

            const delay_pic = Phaser.Math.Between(100, 300);
            setTimeout(() => {
                this.sound.play('JumpScare_1');
                Bates_jumpscare.setVisible(false);

            }, delay_pic);
        };
        activateJumpscare();

    }
//==========================================================================================================
//Timer sets off jumpscares after 10 seconds, and brings game over at 0.
    clocktimer() {
        this.clock_text = this.add.text(1450, 50, ' ' , {
            fontFamily: 'Arial',
            fontSize: 48,
            color: '#ffffff'
        }).setScale(2).setDepth(7).setScrollFactor(0);

        this.clock_text.setVisible(true);

        this.clock = this.time.addEvent({
            delay: 1000,
            repeat: 15,
            callback: () => {
               const timecount = Math.floor(this.clock.getRepeatCount());
                this.clock_text.setText(`Time: ${timecount.toString().padStart(2, '0')}`);
                if (timecount ===  -1 || timecount === 0) {
                    this.game_over();
                } else if (timecount <= 10 && timecount <= 2) {
                    this.Bates_jumpscare = Phaser.Math.Between(1, 3);
                    if (this.Bates_jumpscare === 1) {
                        this.scare();
                    }
                }
               
            },
            callbackScope: this
        });
    }
//==========================================================================================================
//==========================================================================================================
//game over
    game_over() {
         this.sound.stopAll();
         this.cameras.main.fadeOut(2000,0,0,0);
         this.scene.start('Cutscene5');
        };

//check out player.js. 
    update () {
        this.Player.update();
        }

}   


export default Level_3;