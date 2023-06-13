import Player from './Prefabs/Player.js';
class Level_2 extends Phaser.Scene {
    constructor() {
        super('Level_2');

    }

    preload() {
      
        this.load.image('tileset_2', 'assets/lvlassets/Level_2Assets/Office_T.png');
        this.load.tilemapTiledJSON('levelData_O', 'assets/lvlassets/Level_2Assets/Office_Map.JSON');
      
        this.load.spritesheet('MarionPlayer', 'assets/lvlassets/Characters/Marion7.png', {
            frameWidth: 31,
            frameHeight: 47,
            endFrame: 6
        });

        this.load.image("BatesHead", 'assets/lvlassets/Bates.png');
        this.load.image('ItemText', 'assets/lvlassets/Item_Text.png' );
        this.load.image('BatesRadar', 'assets/lvlassets/BatesRadar_Text.png');
        this.load.image('Lives', 'assets/lvlassets/heart.png');
        this.load.image('Health', 'assets/lvlassets/Health_Text.png');

        this.load.image('Mr.Bates', 'assets/lvlassets/Level_2Assets/MrBates.png');

        this.load.image('Background', 'assets/lvlassets/Level_2Assets/Background_O.png');


    }
    
    create() {
 //==========================================================================================================
//effect and sounds
        this.cameras.main.fadeIn(1000,0,0,0);
//==========================================================================================================
//stats resources
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Background').setScale(2).setAlpha(0.5);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'BatesHead').setOrigin(-2.5,1).setScale(0.2).setDepth(2).setScrollFactor(0);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'ItemText').setOrigin(-1.75,0.7).setScale(0.5).setDepth(2).setScrollFactor(0);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'BatesRadar').setOrigin(-0.9,7).setScale(0.7).setDepth(2).setScrollFactor(0);
        this.statbar = this.add.graphics().fillStyle(0x1A1A1A, 1).fill().fillRect(1300,0,2000,2000).setDepth(1).setScrollFactor(0);

//==========================================================================================================
//==========================================================================================================
//functions calls and Player
        this.Player = new Player(this, this.cameras.main.centerX, this.cameras.main.centerY, this.cameras.main).setOrigin(3.5,-3).setScale(2.5).setDepth(3);
        this.cameras.main.setOrigin(0.5,0)
        this.cameras.main.startFollow(this.Player);

//==========================================================================================================
//Enemy image 
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Mr.Bates').setScale(2).setAlpha(1).setDepth(1).setOrigin(2.2,1.8);



//==========================================================================================================
//==========================================================================================================
//TileMap and Collisions 

        const Office_map = this.make.tilemap({key: 'levelData_O', tilewidth: 128, tileheight: 128});
        const O_tileset = Office_map.addTilesetImage('Office_T', 'tileset_2');
        this.walls = Office_map.createLayer('WallsFloor', O_tileset, 100, 0).setScale(0.8)
        this.furn = Office_map.createLayer('Furniture', O_tileset, 100,0).setScale(0.8).setDepth(2);
      
        const FurnCollision_group = this.physics.add.staticGroup();
        const wall_1 = FurnCollision_group.add(this.add.rectangle(510, 715, 185, 160));
        const wall_2 = FurnCollision_group.add(this.add.rectangle(510, 1025,185, 160));    
        const wall_3 = FurnCollision_group.add(this.add.rectangle(915, 1025, 185, 160));   
        const wall_4 = FurnCollision_group.add(this.add.rectangle(915, 715, 185, 160)); 
        this.physics.add.collider(this.Player, FurnCollision_group);
     
//==========================================================================================================
//==========================================================================================================
//Collision task

        const desk = FurnCollision_group.add(this.add.rectangle(715,430,135,120));


        
        
//==========================================================================================================
//==========================================================================================================
//Debugging
  
        this.physics.world.createDebugGraphic();



    }

    
    
    update() {
        this.Player.update();


        
    }
}
export default Level_2;
