export class Cutscene4 extends Phaser.Scene {
    constructor() {
        super("Cutscene4");
    
    }

    preload() {
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.image('good_scene' , 'assets/story_assets/screen3.png');
        this.load.audio('good_song' , 'assets/story_assets/goodtheme.mp3');
        this.load.image('goodtext', 'assets/story_assets/goodtext.png');

    }

    create() {
        this.sound.play('good_song');
        this.cameras.main.fadeIn(500,0,0,0);
        const button_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Arrow').setOrigin(-2.5,-1.7).setScale(0.4);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'good_scene').setOrigin(0.50, 0.70).setScale(1);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'goodtext').setOrigin(0.5,-0.1).setScale(0.67);

        button_2.setInteractive();
        button_2.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            setTimeout(() => 
            {   this.sound.stopAll();
                this.scene.start('Menu');
            }, 2000);
    });
 }



}
export default Cutscene4;
