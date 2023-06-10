
let config = { 
    type: Phaser.CANVAS,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    backgroundColor: '#000000',
    parent: 'displaygame',

    scene: [Menu, PlayScenes, Level_1]


}
let game = new Phaser.Game(config);

/* Basic Scene structure 
 [Main] -> {Menu} -> [Play]      
                       |
Cutscene 1 ->       Level_1.js ]
Cutscene 2 ->       Level_2.js ]  General assets -> Level1 assets etc, Prefabs: ENEMY.js, PLAYER.js
Cutscene 3 ->       Level_3.js ]

* player interaction 
- added Character Sprite w/animation 
- walking with WASD
- collison on walls. 

* Sound assets
- City background music sounds
- Story cutscene and menu background sounds

* Visual assets
- Character Sprite
- TileMaps, TileSprites and image
- Player stats with Text
- Game Boy style

- the character sprite will be edited to fit the theme. Most assets is temp for polish.

* Code Org and Hygeine:
- Mechanics is located in level_1.js, some like the PLayer sprites will be taken to the Player.js. 
as for now locations of the code is now seperated between comment lines for best visiblity. 


the game will be a top down, horror game, Marion/the player will end up in Bates mansion and will have to escape 
and find 10 pieces of evidence around the mansion and avoid Mrs.Bates mother and escape from the front door.  









*/