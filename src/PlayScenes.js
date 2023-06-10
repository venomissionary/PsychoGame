class PlayScenes extends Phaser.Scene {
    constructor() {
        super("PlayScenes");
        
    }


    preload( ) {
        this.load.image('scene1' , 'assets/story_assets/Screen1.png');
        this.load.image('scene2' , 'assets/story_assets/Screen2.png');
        this.load.image('scene3' , 'assets/story_assets/Screen3.png');
        this.load.image('scene4' , 'assets/story_assets/Screen5.png');
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.image('text1', 'assets/story_assets/introText1.png');



    }

    create() {
        this.game_scene_1();

    }

    game_scene_1() {
        this.cameras.main.fadeIn(1000,0,0,0);
        const button = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Arrow').setOrigin(-2.5,-1.7).setScale(0.4);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'scene1').setOrigin(0.50,0.70).setScale(0.35);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'text1').setOrigin(0.50,0.01).setScale(0.60);


        button.setInteractive();
        button.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            setTimeout(() => 
            {   this.sound.stopAll();
                this.scene.start('Level_1');
            }, 2000);
        
        });

    }

    /* game_Scene_2() {

    }

    */


 
}