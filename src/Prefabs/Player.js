
export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, camera) {
      super(scene, x, y, 'MarionPlayer');
      scene.add.existing(this);
      scene.physics.world.enable(this);

      
      this.keys = scene.input.keyboard.addKeys('W,A,S,D,R, SHIFT');

      this.keys.R.on('down', () => {
        scene.scene.restart();
      });

      this.camera = camera;
      this.camera.startFollow(this, true, 1, 1); 
     
     
      if (!scene.anims.get('walk_forward')) {
      scene.anims.create({
        key: 'walk_forward',
        frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 0,end: 3 }),
        frameRate: 6,
        repeat: -1,
      });
    }

      if (!scene.anims.get('walk_backward')) {
        scene.anims.create({
          key: 'walk_backward',
          frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 12,end: 15 }),
          frameRate: 6,
          repeat: -1,
        });
  
      }

      if (!scene.anims.get('walk_left')) {
        scene.anims.create({
          key: 'walk_left',
          frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 4,end: 7 }),
          frameRate: 6,
          repeat: -1,
        });
  
      }

      if (!scene.anims.get('walk_right')) {
        scene.anims.create({
          key: 'walk_right',
          frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 8,end: 11 }),
          frameRate: 6,
          repeat: -1,
        });
  
      }

       
      if (!scene.anims.get('Run_forward')) {
        scene.anims.create({
          key: 'Run_forward',
          frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 0,end: 3 }),
          frameRate: 10,
          repeat: -1,
        });
      }
  
        if (!scene.anims.get('Run_backward')) {
          scene.anims.create({
            key: 'Run_backward',
            frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 12,end: 15 }),
            frameRate: 10,
            repeat: -1,
          });
    
        }
  
        if (!scene.anims.get('Run_left')) {
          scene.anims.create({
            key: 'Run_left',
            frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 4,end: 7 }),
            frameRate: 10,
            repeat: -1,
          });
    
        }
  
        if (!scene.anims.get('Run_right')) {
          scene.anims.create({
            key: 'Run_right',
            frames: scene.anims.generateFrameNumbers('MarionPlayer', { start: 8,end: 11 }),
            frameRate: 10,
            repeat: -1,
          });
    
        }

    }


  
    update() {
        this.player_movement();
    }

    player_movement() {
        const velocity = 100;
        const runvelocity = 200;
        let animationKey = ' ';

        
        this.body.setVelocity(0);   

      if (this.keys.W.isDown) {
        this.body.setVelocityY(-velocity);
        animationKey = 'walk_backward';
      } else if (this.keys.S.isDown) {
        this.body.setVelocityY(velocity);
        animationKey = 'walk_forward';
      }
  
      if (this.keys.A.isDown) {
        this.body.setVelocityX(-velocity);
        animationKey = 'walk_left';
      } else if (this.keys.D.isDown) {
        this.body.setVelocityX(velocity);
        animationKey = 'walk_right';
      }

  
      if (this.keys.W.isDown || this.keys.S.isDown || this.keys.A.isDown || this.keys.D.isDown) {
        if (this.keys.SHIFT.isDown){
            this.body.velocity.normalize().scale(runvelocity);
            animationKey =  'Run_' + animationKey.substring(5);
        }else {
            animationKey = 'walk_'  + animationKey.substring(5);
        }
        this.anims.play(animationKey, true);
      } else {
        this.anims.stop();
        this.setTexture('MarionPlayer', 1); 
      }

    }



  }