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
       
        this.load.image('Font6', 'assets/Menu_assets/Tutorial.png')
        this.load.image('Font7', 'assets/Menu_assets/Rewards.png')
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.image('credits', 'assets/Menu_assets/credits.png');
        
        this.load.image("luggage", 'assets/lvlassets/Level1/Cash.png');
        this.load.image('key_reward', 'assets/lvlassets/Level_2Assets/Key_stats.png')
        this.load.image('evidence_reward', 'assets/lvlassets/Level_3/paper.png');
        this.load.image('tutorialMenu', 'assets/Menu_assets/tutorialMenu.png');
        this.load.image('trophy_complete', 'assets/Menu_assets/trophy.png');
        this.load.image('Arrow', 'assets/story_assets/Arrow.png');
        this.load.image('scene1' , 'assets/story_assets/Screen1.png');



    }

    create() {  
        this.cameras.main.fadeIn(1000,0,0,0);
        this.sound.play('Marion', { loop: true});
        this.scroll = this.add.tileSprite (0,0, 1920,1080, 'BackgroundMenu').setOrigin(0.3,0).setScale(1.7).setRotation(-0.4)
        this.main_menu();
   
    }


    main_menu() {
        const menuScreenGroup = this.add.group();
        menuScreenGroup.add(this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font1').setOrigin(0.75,1).setScale(3));
        menuScreenGroup.add(this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font2').setOrigin(1.08,0.2).setScale(2));
        menuScreenGroup.add(this.add.graphics().fillStyle(0x82a85b, 0.95).fill().fillRect(1300,0,800,1080));
      
        const click_play = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font3').setOrigin(-1.25,1.8).setScale(2);
        click_play.setInteractive();
        click_play.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            setTimeout(() => {
                this.sound.stopAll();
                this.scene.start('Cutscene1');
            }, 2000);
        });

        const click_credits = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font4').setOrigin(-0.70,-0.1).setScale(2);
        click_credits.setInteractive();
        click_credits.on('pointerdown', () => {
            menuScreenGroup.setVisible(false);
            click_play.setVisible(false);
            click_credits.setVisible(false);
            click_tutorial.setVisible(false);
            this.credit_screen();
        });


        const click_tutorial = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Font6').setOrigin(-0.80,0.8).setScale(2);
        click_tutorial.setInteractive();
        click_tutorial.on('pointerdown', () => {
            menuScreenGroup.setVisible(false);
            click_play.setVisible(false);
            click_credits.setVisible(false);
            click_tutorial.setVisible(false);
            this.tutorial_Screen();
        }); 

  


        
    }

    tutorial_Screen() {
        const background = this.add.graphics().fillStyle(0x82a85b, 0.8).fill().fillRect(0,0,1920,1080);
        const button_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Arrow').setOrigin(-2.5,-1.7).setScale(0.4).setDepth(4);
        const tutorial_Menu = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'tutorialMenu').setScale(1).setDepth(4);

        button_2.setInteractive();
        button_2.on('pointerdown', () => {
            button_2.setVisible(false);
            background.setVisible(false);
            tutorial_Menu.setVisible(false);
            this.main_menu();
        });

    }


    credit_screen() { 
        const button_2 = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Arrow').setOrigin(-2.5,-1.7).setScale(0.4).setDepth(4);
        const credits = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'credits').setOrigin(0.5,0.5).setScale(0.5).setDepth(3);
        const background = this.add.graphics().fillStyle(0x82a85b, 0.5).fill().fillRect(0,0,1920,1080);
        
        button_2.setInteractive();
        button_2.on('pointerdown', () => {
            credits.setVisible(false);
            button_2.setVisible(false);
            background.setVisible(false);
            this.main_menu();
        });
 }



    update(){
        this.scroll.tilePositionX += 0.5;
    }
}

export default Menu;