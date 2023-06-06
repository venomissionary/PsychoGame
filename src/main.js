let config = { 
    type: Phaser.CANVAS,
    width: 840,
    height: 580,

    scene: [Menu, Load, Play ]


}
let game = new Phaser.Game(config);


