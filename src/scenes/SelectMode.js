import ButtonText from "../gameObjects/ButtonText";

export default class SelectMode extends Phaser.Scene
{
    constructor()
    {
        super({key: 'SelectMode'});

    }

    create()
    {
        this.setBg(this);
        this.addWelcome();

        var btn1 = new ButtonText(this,675,300,170,50,'Barajar');
        btn1.button.action =()=>{
            this.scene.start('DeckTable');
        };

        var btn2 = new ButtonText(this,225,300,170,50,'Tabla','red');
        btn2.button.action =()=>{
            this.scene.start('Board');
        };
        

        
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
    addWelcome()
    {
        var gW = this.sys.game.config.width;
        var gH = this.sys.game.config.height;
        var text1 = this.add.text(gW/2, gH/4, "Bienvenid@", { fontFamily: "Arial Black", fontSize: 74, color: "#148671" });
        text1.setStroke('#2FCBCB', 16);
        text1.setOrigin(0.5);
    }
    
    
}