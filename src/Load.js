class Load extends Phaser.Scene {
    constructor() {
        super("Load");
    }


    preload( ) {
        this.load.image('BackgroundMenu', 'assets/Menutitle.png');
    }

}