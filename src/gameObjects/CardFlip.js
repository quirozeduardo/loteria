import Card from "./Card";

export default class CardFlip extends Phaser.GameObjects.Container
{
    constructor(scene, x, y,textures,options = {textureFront: 0, rounded: false, draggable: false,width: 0, height: 0})
    {
        super(scene, x, y);
        this.options = options;
        scene.add.existing(this);
        if(options.textureFront == 0){
            this.sprite1 = scene.add.sprite(0,0,textures[1]);
            this.sprite2 = scene.add.sprite(0,0,textures[0]);
        }
        else{
            this.sprite1 = scene.add.sprite(0,0,textures[0]);
            this.sprite2 = scene.add.sprite(0,0,textures[1]);
        }
        
        this.isFlipped = false;

        this.sprite2.visible = this.isFlipped;

        this.add([this.sprite1,this.sprite2]);
        this.resize(scene);
        this.rounded = false;
        if(this.width > 0 && this.height > 0)
        {
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
        }
        this.setInteractive({ draggable: true });
        this.on('pointerup',() => {this.tweenFlip(scene)});
        
    }
    tweenFlip(scene)
    {
        scene.tweens.add({
            targets: this,
            scaleX: 0,
            scaleY: 0,
            duration: 200,
            rotation: 2,
            ease: 'Power1',
            yoyo: true,
            onYoyo: ()=>{
                this.sprite2.visible = !this.isFlipped;
                this.sprite1.visible = this.isFlipped;
            },
            onComplete: () =>{
                this.isFlipped = !this.isFlipped;
            }
        });
    }
    resize(scene){
        let width = this.options.width;
        let height = this.options.height;
        this.setSize(width,height);

        let sfx1 = width/this.sprite1.width;
        let sfy1 = height/this.sprite1.height;

        let sfx2 = width/this.sprite2.width;
        let sfy2 = height/this.sprite2.height;

        this.sprite1.scaleX = sfx1;
        this.sprite1.scaleY = sfy1;

        this.sprite2.scaleX = sfx2;
        this.sprite2.scaleY = sfy2;
    }
    
    activeDrag()
    {
        
        this.on('drag', (pointer, dragX, dragY) =>{
            this.x = dragX;
            this.y = dragY;
            if(this.rounded === true)
            {
                this.setPositionShape();   
            }
    
    
        });
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