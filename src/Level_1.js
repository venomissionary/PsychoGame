class Level_1 extends Phaser.Scene {
    constructor() {
        super("Level_1");
    }

    preload(){
        //level 1 (tutorial level assets)
        this.load.image('tileset', 'assets/lvlassets/BedroomMap.png');
        //this.load.image('tilemap', 'assets/lvlassets/BedMap.png');
        this.load.tilemapTiledJSON('levelData', 'assets/lvlassets/Bedroom.JSON');
        this.load.image('Background_1', 'assets/lvlassets/Level1/BackGround_1Pixel.png');

        this.load.audio('CitySounds', 'assets/lvlassets/Level1/City_Background.mp3');

    //level 1 stats 
        this.load.image("Money" , 'assets/lvlassets/Level1/Money.png' );
        this.load.image("BatesHead", 'assets/lvlassets/Bates.png');
        this.load.image("luggage", 'assets/lvlassets/Level1/Cash.png');
        this.load.image('ItemText', 'assets/lvlassets/Item_Text.png' );
        this.load.image('BatesRadar', 'assets/lvlassets/BatesRadar_Text.png');
        this.load.image('Lives', 'assets/lvlassets/heart.png');
        this.load.image('Health', 'assets/lvlassets/Health_Text.png');
        this.load.image('Money_pick', 'assets/lvlassets/Level1/Money_Pickup.png');

    //level 1 sprite
    this.load.spritesheet('MarionPlayer', 'assets/lvlassets/Characters/Marion7.png', {
        frameWidth: 31,
        frameHeight: 47,
        endFrame: 6
    });

    }

    create() {
        this.cameras.main.fadeIn(1000,0,0,0);
        this.sound.play('CitySounds', { loop: true, volume: 0.3});



//#################################################
        //level 1 (tutorial level assets)
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Background_1').setScale(1);
        this.add.graphics().fillStyle(0x1A1A1A, 1).fill().fillRect(1300,0,800,1080).setDepth(0);
        //Level 1 (stats assets)
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'BatesHead').setOrigin(-2.5,1).setScale(0.2).setDepth(1);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Money').setOrigin(-4.5,-0.5).setScale(0.1).setDepth(1);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'luggage').setOrigin(-5.5,-0.35).setScale(0.11).setDepth(1);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ItemText').setOrigin(-1.75,0.7).setScale(0.5).setDepth(1);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'BatesRadar').setOrigin(-0.9,7).setScale(0.7).setDepth(1);
        
        const Heart_1 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Lives').setOrigin(-4.3, 4).setScale(0.1).setDepth(1);
        const Heart_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Lives').setOrigin(-5.4, 4).setScale(0.1).setDepth(1);
        const Heart_3 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Lives').setOrigin(-6.5, 4).setScale(0.1).setDepth(1);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Health').setOrigin(-1.47, 8.5).setScale(1.2).setDepth(1);
//#################################################
        //level 1 (tutorial level map)
        const map = this.make.tilemap({key: 'levelData', tilewidth: 64, tileheight: 64});
        const tileset = map.addTilesetImage('BedroomMap', 'tileset');
        
        const groundLayer = map.createLayer('Floor', tileset, 100, 60).setScale(1.5);
        const objectLayer = map.createLayer('Objects', tileset, 100,60).setScale(1.5);

//###############################################
        //level 1 (Player)
        this.character = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'MarionPlayer').setOrigin(5,1).setScale(2.5).setDepth(2);
        this.keys = this.input.keyboard.addKeys('W,A,S,D');

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('MarionPlayer' , {start: 4, end: 5}),
            frameRate: 4,
            repeat: -1 

        });
//#################################################
        //collision boxes 
        const collision_group= this.physics.add.staticGroup();
        const wall_1 = collision_group.add(this.add.rectangle(255, 550, 64, 600));
        const wall_2 = collision_group.add(this.add.rectangle(900, 550, 64, 600));
        const wall_3 = collision_group.add(this.add.rectangle(580, 860, 600, 64));
        const wall_4 = collision_group.add(this.add.rectangle(580, 225, 600, 64));

        this.physics.add.collider(this.character, collision_group);
        
        
        this.physics.world.createDebugGraphic();

        

    }

    update() {
        this.Player_sprite();
    }

//#################################################
    Player_sprite() {
        this.character.setVelocityX(0);
        
        if (this.keys.W.isDown) {
            this.character.setVelocityY(-100); 
        } else if (this.keys.S.isDown) {
            this.character.setVelocityY(100); 
        }
        
        if (this.keys.A.isDown) {
        this.character.setVelocityX(-100); 
        } else if (this.keys.D.isDown) {
            this.character.setVelocityX(100); 
        }
        if (!this.keys.W.isDown && !this.keys.S.isDown) {
            this.character.setVelocityY(0);

        }
        if(!this.keys.A.isDown && !this.keys.D.isDown) {
            this.character.setVelocityX(0);
        }

        if(this.keys.W.isDown || this.keys.S.isDown || this.keys.A.isDown || this.keys.D.isDown) {
            this.character.anims.play('walk', true);
        }else {
            this.character.anims.stop('walk');
            this.character.setTexture('MarionPlayer', 1);
        }

    }



}

