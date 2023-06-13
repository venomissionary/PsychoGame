export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, camera) {
      super(scene, x, y, 'MarionPlayer');
      scene.add.existing(this);
      scene.physics.world.enable(this);

      
      this.keys = scene.input.keyboard.addKeys('W,A,S,D');
     
     
      if (!scene.anims.get('walk')) {
      scene.anims.create({
        key: 'walk',
        frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 4, end: 5 }),
        frameRate: 4,
        repeat: -1,
      });

      this.camera = camera;
      this.camera.startFollow(this, true, 1, 1); 
      
    }
    }
  
    update() {
        this.player_movement();
    }

    player_movement() {
        this.body.setVelocityX(0);   

      if (this.keys.W.isDown) {
        this.body.setVelocityY(-100);
      } else if (this.keys.S.isDown) {
        this.body.setVelocityY(100);
      }
  
      if (this.keys.A.isDown) {
        this.body.setVelocityX(-100);
      } else if (this.keys.D.isDown) {
        this.body.setVelocityX(100);
      }

      if (!this.keys.W.isDown && !this.keys.S.isDown) {
        this.body.setVelocityY(0);
      }
      if (!this.keys.A.isDown && !this.keys.D.isDown) {
        this.body.setVelocityX(0);
      }
  
      if (this.keys.W.isDown || this.keys.S.isDown || this.keys.A.isDown || this.keys.D.isDown) {
        this.anims.play('walk', true);
      } else {
        this.anims.stop('walk');
        this.setTexture('MarionPlayer', 1);
      }

   


    }





  

  }