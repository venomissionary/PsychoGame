export class Cutscene2 extends Phaser.Scene {
    constructor() {
        super("Cutscene2");
    
    }

    preload() {
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.audio('Marion', 'assets/Menu_assets/Marion_Theme.mp3');
        this.load.image('text2', 'assets/story_assets/introtext2.png');
        this.load.image('scene5' , 'assets/story_assets/Scene6.png');
        this.load.audio('Patrol_car', 'assets/Menu_assets/Deep_treble.mp3');







    }

    create() {
        this.sound.play('Patrol_car', { loop: true});
        this.cameras.main.fadeIn(500,0,0,0);
        const button_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Arrow').setOrigin(-2.5,-1.7).setScale(0.4);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'scene5').setOrigin(0.50, 0.70).setScale(0.80);
        //this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'scene6').setOrigin(0.50, 0.70).setScale(0.80);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'text2').setOrigin(0.5,-0.2).setScale(0.60);

        button_2.setInteractive();
        button_2.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            setTimeout(() => 
            {   this.sound.stopAll();
                this.scene.start('Level_2');
            }, 2000);
    });
 }



}

export default Cutscene2;
