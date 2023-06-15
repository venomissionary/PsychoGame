import Menu from './Menu.js'
import Cutscene1  from './Cutscene1.js'
import Level_1 from './Level_1.js'
import Cutscene2 from './Cutscene2.js'
import Level_2 from './Level_2.js'
import Cutscene3 from './Cutscene3.js'
import Level_3 from './Level_3.js'
import  Cutscene4  from './Cutscene4.js'
import  Cutscene5  from './Cutscene5.js'
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

    scene: [Menu, Cutscene1, Level_1, Cutscene2, Level_2, Cutscene3, Level_3, Cutscene4, Cutscene5]


}
let game = new Phaser.Game(config);


/* 

important notes to keep track for 

+5 The game runs/executes without critical errors or crashes. (Graders will use Chrome, so be sure you game works in that browser.)
+5 Your project has a well-maintained and updated GitHub page that shows meaningful contributions, commits, and milestones throughout the course of the project's history.
+5 The game includes a title screen, some means to view credits, some means of "completion," and the ability to restart from within the game. 
(These criteria are judged relative to your specific game, genre, artistic tone, etc.)
+5 Your project and code are well-structured and organized, including legible comments, appropriate data structures, sensible prefabs, 
meaningful variable names, logical scene structures, etc. (Nathan's examples are a good baseline.)


+10 Your game uses at least five of Phaser's major components (besides Scenes), which may include: physics systems, cameras, particle effects, 
text objects, the animation manager, the tween manager, timers, tilemaps, pipeline FX, etc. (Please list these components in your main.js file.)

Phaser game components: 
Cameras, 
physics systems 
animation manager 
tween manager 
timers 
tilemaps 
text objects

+10 Your game has artistic cohesion, i.e. the art, sound, typography, etc. 
reflect your adaptation's aesthetic goals, your game is legible as a film adaptation, and your assets make sense together.

Pokemon orthogonal style.

+10 Your game has mechanical cohesion, i.e. the mechanics reflect your adaptation's technical goals, 
the game controls and performs as expected, and the mechanics are well-implemented.

- Walking, running, stats, timer, item equipping, collisions.















*/




















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


- added new levels, collision, working cameras, new music ,rereanged cutscenes, Player and enemy is now proper seperate as files at prefabs.  
Item equips when player walks on them and new sounds!









*/