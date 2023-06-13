import Player from './Prefabs/Player.js';

class Level_1 extends Phaser.Scene {
    constructor() {
        super("Level_1");
    }

    preload(){
        //level 1 (tutorial level assets)
        this.load.image('tileset', 'assets/lvlassets/BedroomMap.png');
        this.load.tilemapTiledJSON('levelData', 'assets/lvlassets/Bedroom.JSON');
        this.load.image('Background_1', 'assets/lvlassets/Level1/BackGround_1Pixel.png');
        this.load.audio('CitySounds', 'assets/lvlassets/Level1/City_Background.mp3');
        this.load.audio('Money_sound', 'assets/lvlassets/pickupCoin.wav');

        this.load.image("Money" , 'assets/lvlassets/Level1/Money.png' );
        this.load.image("BatesHead", 'assets/lvlassets/Bates.png');
        this.load.image('ItemText', 'assets/lvlassets/Item_Text.png' );
        this.load.image('BatesRadar', 'assets/lvlassets/BatesRadar_Text.png');
        this.load.image('Lives', 'assets/lvlassets/heart.png');
        this.load.image('Health', 'assets/lvlassets/Health_Text.png');
        this.load.image('Money_pick', 'assets/lvlassets/Level1/Money_Pickup.png');
        this.load.image("luggage", 'assets/lvlassets/Level1/Cash.png');
        this.load.image("luggage_pick", 'assets/lvlassets/Level1/Cash_Pickup.png');


        this.load.spritesheet('MarionPlayer', 'assets/lvlassets/Characters/Marion7.png', {
            frameWidth: 31,
            frameHeight: 47,
            endFrame: 6
        });
    }

//==========================================================================================================
    create() {

//Sounds and video effects 
        this.cameras.main.fadeIn(1000,0,0,0);
        this.sound.play('CitySounds', { loop: true, volume: 0.3});  
//==========================================================================================================
//stats assets
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Background_1').setScale(2);
        this.add.graphics().fillStyle(0x1A1A1A, 1).fill().fillRect(1300,0,3000,2000).setDepth(0).setScrollFactor(0);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'BatesHead').setOrigin(-2.5,1).setScale(0.2).setDepth(1).setScrollFactor(0);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ItemText').setOrigin(-1.75,0.7).setScale(0.5).setDepth(1).setScrollFactor(0);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'BatesRadar').setOrigin(-0.9,7).setScale(0.7).setDepth(1).setScrollFactor(0);

        const Heart_1 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Lives').setOrigin(-4.3, 4).setScale(0.1).setDepth(1).setScrollFactor(0);
        const Heart_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Lives').setOrigin(-5.4, 4).setScale(0.1).setDepth(1).setScrollFactor(0);
        const Heart_3 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Lives').setOrigin(-6.5, 4).setScale(0.1).setDepth(1).setScrollFactor(0);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Health').setOrigin(-1.47, 8.5).setScale(1.2).setDepth(1).setScrollFactor(0);

//==========================================================================================================
//level 1 (tutorial level map)
        const map = this.make.tilemap({key: 'levelData', tilewidth: 64, tileheight: 64});
        const tileset = map.addTilesetImage('BedroomMap', 'tileset');
        
        this.groundLayer = map.createLayer('Floor', tileset, 100, 60).setScale(1.5);
        this.objectLayer = map.createLayer('Objects', tileset, 100,60).setScale(1.5);

//==========================================================================================================
//==========================================================================================================
//==========================================================================================================
//functions and references 
        this.Player = new Player(this, this.cameras.main.centerX, this.cameras.main.centerY, this.cameras.main).setScale(2.5).setOrigin(8, 1).setDepth(2);

        this.Player_stats();
//Wall collision v1
       
        const collision_group = this.physics.add.staticGroup();
        const wall_1 = collision_group.add(this.add.rectangle(255, 550, 64, 600));
        const wall_2 = collision_group.add(this.add.rectangle(900, 550, 64, 600));    
        const wall_3 = collision_group.add(this.add.rectangle(580, 860, 600, 64));   
        const wall_4 = collision_group.add(this.add.rectangle(580, 225, 600, 64));
        this.physics.add.collider(this.Player, collision_group);

        //debugging
        this.physics.world.createDebugGraphic();


    }
//==========================================================================================================
//=========================================================================================
//==========================================================================================================
//Item colliisions + equip
    Player_stats() {
        const itemCollision_group = this.physics.add.group();
        const cash_1 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Money_pick').setOrigin(6.5,-2).setScale(0.08).setDepth(1);
        this.physics.world.enable(cash_1);
        itemCollision_group.add(cash_1);

        const cash_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'luggage_pick').setOrigin(2,0.2).setScale(0.08).setDepth(1);
        this.physics.world.enable(cash_2);
        itemCollision_group.add(cash_2);
        
        const Cash_collectable = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Money').setOrigin(-4.5,-0.5).setScale(0.1).setDepth(1).setAlpha(0.05).setScrollFactor(0);
        const Luggage_collectable = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'luggage').setOrigin(-5.5,-0.35).setScale(0.11).setDepth(1).setAlpha(0.05).setScrollFactor(0);
        this.physics.add.collider(this.Player, itemCollision_group, (Player,cash) => {
            cash.destroy();
            this.sound.play('Money_sound');
            if (cash == cash_1) {
                Cash_collectable.setAlpha(1); 
            } 
            if (cash == cash_2) {
                Luggage_collectable.setAlpha(1);
                this.nextlevel(); 
            }
        }, null, this);
    }
//=============================================
//Next level
    nextlevel() {
        const finish_group = this.physics.add.staticGroup();
        finish_group.add(this.add.rectangle(886,390,64,45));
        this.physics.add.collider(this.Player, finish_group, () => {
            this.cameras.main.fadeOut(1500,0,0,0);
            setTimeout( () => {
                this.sound.stopAll();
                this.scene.start('Cutscene2');
            }, 2000);

        });

    }
    
    update() {
        this.Player.update();
    
    }

}

export default Level_1;