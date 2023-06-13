
export class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    preload( ) {
        this.load.image('BackgroundMenu', 'assets/Menu_assets/Menu2.png');
        this.load.audio('Marion', 'assets/Menu_assets/Marion_Theme.mp3');
        this.load.image('Font1', 'assets/Menu_assets/Font_1.png');
        this.load.image('Font2', 'assets/Menu_assets/Font_2.png');
        this.load.image('Font3', 'assets/Menu_assets/Font_3.png');
        this.load.image('Font4', 'assets/Menu_assets/Font_4.png');
        this.load.image('Font5', 'assets/Menu_assets/Font_5.png');
        
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');


        this.load.image('scene1' , 'assets/story_assets/Screen1.png');
       // this.load.image('scene2' , 'assets/story_assets/Screen2.png');
       // this.load.image('scene3' , 'assets/story_assets/Screen3.png');
       // this.load.image('scene4' , 'assets/story_assets/Screen5.png');
        //this.load.image('Arrow', 'assets/story_assets/Arrow.png');


    }

    create() {  
        this.cameras.main.fadeIn(1000,0,0,0);
        this.sound.play('Marion', { loop: true});
        this.scroll = this.add.tileSprite (0,0, 1920,1080, 'BackgroundMenu').setOrigin(0.3,0).setScale(1.7).setRotation(-0.4)
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font1').setOrigin(0.75,1).setScale(3);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font2').setOrigin(1.08,0.2).setScale(2);
        
       
        this.add.graphics().fillStyle(0x82a85b, 0.95).fill().fillRect(1300,0,800,1080);


//#################################################
//play button
        const click_play = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font3').setOrigin(-1.27,1.8).setScale(2);
        click_play.setInteractive();
        click_play.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            setTimeout(() => {
                this.sound.stopAll();
                this.scene.start('Cutscene1');
            }, 2000);
        });
        
//#################################################

        
//options/tutorial/credits
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font4').setOrigin(-0.70,-0.7).setScale(2);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font5').setOrigin(-0.65,0.45).setScale(2);
   
    }






  

//#################################################

//credits are not availble in-game until projects are done.

        /* const click_credits = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font4').setOrigin(-0.70,-0.7).setScale(2);
        click_options.setInteractive();
        click_options.on('pointerdown', () => {
            this.options_screen();

        }); 
//Options will be availble at a later date as well.

          const click_credits = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font5').setOrigin(-0.70,-0.7).setScale(2);
        click_options.setInteractive();
        click_options.on('pointerdown', () => {
            this.options_screen();

        }); */

//#################################################

    update(){
        
        this.scroll.tilePositionX += 0.5;
    }
}

export default Menu;