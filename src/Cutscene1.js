export class Cutscene1 extends Phaser.Scene {
    constructor() {
        super("Cutscene1");
    
    }

    preload() {
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.audio('Marion', 'assets/Menu_assets/Marion_Theme.mp3');
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.image('text1', 'assets/story_assets/introText1.png');

    }

    create() {
        this.sound.play('Marion', { loop: true});
        this.cameras.main.fadeIn(1000,0,0,0);
        const button = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Arrow').setOrigin(-2.5,-1.7).setScale(0.4);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'scene1').setOrigin(0.50,0.70).setScale(0.35);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'text1').setOrigin(0.50,0.01).setScale(0.60);
        button.setInteractive();
        button.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            setTimeout(() => {   
                this.sound.stopAll();
                this.scene.start('Level_1');
            }, 2000);
        });
    }




}

export default Cutscene1;