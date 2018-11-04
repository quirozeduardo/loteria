export default class ButtonSprite extends Phaser.GameObjects.Sprite
{
    
    constructor(scene, x, y, texture, options = {frameStart: 0, frameOver: 0, frameClick: 0, action: null})
    {
        super(scene, x, y, texture, (options.frameStart != undefined)?options.frameStart:0);
        this.frameOver = (options.frameOver != undefined)?options.frameOver:null;
        this.frameClick = (options.frameClick != undefined)?options.frameClick:null;
        this.frameStart = (options.frameStart != undefined)?options.frameStart:0;
        this.action = (options.action != undefined)?options.action:null;
        this.isOver = false;


        scene.add.existing(this);
        this.setInteractive();

        this.on('pointerdown',this.onDown);
        this.on('pointerup',this.onUp);
        this.on('pointerout',this.onOut);
        this.on('pointerover',this.onHover);

    }
    onHover()
    {
        if(this.frameOver != null)
        {
            this.setFrame(this.frameOver);
        }
        this.isOver = true;
    }
    onDown()
    {
        if(this.frameClick != null)
        {
            this.setFrame(this.frameClick);
        }
    }
    onOut()
    {
        this.setFrame(this.frameStart);
        this.isOver = false;
    }
    onUp()
    {
        if(this.isOver != null)
        {
            if(this.frameOver != null)
            {
                this.setFrame(this.frameOver);
            }
        }
        else
        {
            this.setFrame(this.frameStart);
        }
        if(this.action != null)
        {
            this.action();
        }
    }

}