import ButtonSprite from "../gameObjects/ButtonSprite";

export default class SelectMode extends Phaser.Scene
{
    constructor()
    {
        super({key: 'SelectMode'});

    }

    create()
    {
        this.setBg(this);
        this.button1 = new ButtonSprite(this, 225, 300, 'button',{
            frameStart:1, 
            frameOver:2, 
            frameClick: 0,
            action: () => {
                this.scene.start('Board');
            }
        });
        
        this.button2 = new ButtonSprite(this, 675, 300, 'button',{
            frameStart:1, 
            frameOver:2, 
            frameClick: 0,
            action: () => {
                this.scene.start('DeckTable');
            }
        });

    
    }
    setBg(scene)
    {
        var gW = this.sys.game.config.width;
        var gH = this.sys.game.config.height;
        scene.background = this.add.image(gW/2,gH/2,'background');
        var bgWidth = this.background.width;
        var bgHeigh = this.background.height;
        var scaleX = gW/bgWidth;
        var scaleY = gH/bgHeigh;
        this.background.scaleX = scaleX;
        this.background.scaleY = scaleY;
    }
    
    
}