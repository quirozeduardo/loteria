import ButtonSprite from "./ButtonSprite";

export default class ButtonText extends Phaser.GameObjects.Container
{
    constructor(scene, x, y, width, height, text,color = 'blue')
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.button = new ButtonSprite(scene, 0, 0, 'btn_'+color,{ frameStart: '1', frameOver: '1', frameClick: '2'});
        this.text = scene.add.text(0, 0, text, { fontFamily: "Arial Black", fontSize: 20, color: "#FFFFFF" });
        this.text.setOrigin(0.5);
        this.add([this.button,this.text]);
        this.setSize(width,height);
        this.pack([this.button]);
    }
    pack(elements)
    {
        for(var i=0; i< elements.length; i++)
        {
            let sX = this.width / elements[i].width;
            let sY = this.height / elements[i].height;
            elements[i].scaleX =sX;
            elements[i].scaleY =sY;
        }
    }
}