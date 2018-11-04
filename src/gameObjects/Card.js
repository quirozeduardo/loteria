export default class Card extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture,options = {frame: 0, rounded: false, draggable: false, width: 0, height: 0})
    {
        super(scene, x, y, texture,options.frame);
        this.options = options;
        scene.add.existing(this);
        this.rounded = false;
        if(options.rounded)
        {
            this.rounded = true;
            this.shape = scene.make.graphics();
            this.shape.fillRoundedRect(0, 0, this.width, this.height,10);
            this.setPositionShape();
            var mask = this.shape.createGeometryMask();
            this.mask = mask;
        }
        if(options.draggable === true)
        {
            this.activeDrag();
        }
        this.resize();
        
    }
    resize(){
        let width = this.options.width;
        let height = this.options.height;

        let sfx1 = width/this.width;
        let sfy1 = height/this.height;

        this.scaleX = sfx1;
        this.scaleY = sfy1;

    }
    activeDrag()
    {
        this.setInteractive({ draggable: true });
        this.on('drag', (pointer, dragX, dragY) =>{
            this.x = dragX;
            this.y = dragY;
            if(this.rounded === true)
            {
                this.setPositionShape();   
            }
    
        });
        console.log(this);
    }
    setPositionShape()
    {
        let originW = this.width * this.originX;
        let originH = this.height * this.originY;
        let posX = this.x - originW;
        let posY = this.y - originH;

        this.shape.x = posX;
        this.shape.y = posY;

    }
    setDraggable(status)
    {
        this.draggable = status;
    }
    
}