export class Cutscene5 extends Phaser.Scene {
    constructor() {
        super("Cutscene5");
    
    }

    preload() {
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.image('bad_scene' , 'assets/story_assets/bad_Scene.png');
        this.load.audio('bad_scream' , 'assets/story_assets/Marionscream.mp3');
        this.load.image('bad_text', 'assets/story_assets/bad_text.png');

    }

    create() {
        this.sound.play('bad_scream');
        this.cameras.main.fadeIn(500,0,0,0);
        const button_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Arrow').setOrigin(-2.5,-1.7).setScale(0.4);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bad_scene').setOrigin(0.50, 0.70).setScale(1);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bad_text').setOrigin(0.5,-0.1).setScale(0.67);

        button_2.setInteractive();
        button_2.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            setTimeout(() => 
            {   this.sound.stopAll();
                this.scene.start('Level_3');
            }, 2000);
    });
 }



}
export default Cutscene5;
