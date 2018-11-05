import Card from "../gameObjects/Card";
import CardFlip from "../gameObjects/CardFlip";
import ButtonSprite from "../gameObjects/ButtonSprite";
import ButtonText from "../gameObjects/ButtonText";

export default class DeckTable extends Phaser.Scene
{
    constructor()
    {
        super({ key: 'DeckTable'});
        this.cards = new Array();
        this.positonFlipped = 0;
        this.size = 26;
        this.arrN = new Array();
        this.au = 700 / this.size;
        this.xi = 100;
        this.current = null;
        
    }
    create()
    {
        this.positonFlipped = 0;
        this.setBg(this);
        for(let i = 1; i <= this.size; i++)
        {
            this.arrN.push(i);
        }
        this.shuffle(this.arrN);
        for(let i = 0; i < this.size; i++)
        {
            
            let cf = new Card(this,this.xi + (this.au*i),85,'card_back_main',{rounded: true,width: 110, height: 145});
            cf.setInteractive();
            cf.tmpScaleY = cf.scaleY;
            cf.tmpScaleX = cf.scaleX;
            cf.numberCard = [this.arrN[i]];
            cf.on('pointerover',()=>{
                this.tweens.add({
                    targets: cf,
                    scaleY: (cf.tmpScaleY + 0.1),
                    scaleX: (cf.tmpScaleX + 0.1),
                    duration: 100,
                    ease: 'Power1'
                });
            });
            cf.on('pointerout',()=>{
                this.tweens.add({
                    targets: cf,
                    scaleY: cf.tmpScaleY,
                    scaleX: cf.tmpScaleX,
                    duration: 100,
                    ease: 'Power1'
                });
            });
            cf.on('pointerup',()=>{
                if(this.current){
                    this.current.destroy();
                }
                this.current = new CardFlip(this,450,305,['card_'+cf.numberCard,'card_back_'+cf.numberCard],{textureFront: 0,rounded: true,width: 200, height: 280});
                this.addToFlippedList(cf.numberCard);
                cf.destroy();
            });

        }

        var buttonRestore = new ButtonText(this,750,300,170,50,'Barajar','green');
        buttonRestore.button.action =()=>{
            this.scene.start('DeckTable');
        };


        var buttonBack = new ButtonText(this,150,300,170,50,'Atras','red');
        buttonBack.button.action =()=>{
            this.scene.start('SelectMode');
        };
        
    }
    addToFlippedList(num)
    {
        let cf = new CardFlip(this,this.xi + (this.au*this.positonFlipped),525,['card_'+num,'card_back_'+num],{textureFront: 1,rounded: true,width: 110, height: 145});
        this.cards.push(cf);
        cf.setInteractive();
        cf.tmpScaleY = cf.scaleY;
        cf.tmpScaleX = cf.scaleX;
        cf.on('pointerover',()=>{
            this.tweens.add({
                targets: cf,
                scaleY: (cf.tmpScaleY + 0.1),
                scaleX: (cf.tmpScaleX + 0.1),
                
                duration: 100,
                ease: 'Power1'
            });
        });
        cf.on('pointerout',()=>{
            this.tweens.add({
                targets: cf,
                scaleY: cf.tmpScaleY,
                duration: 100,
                ease: 'Power1'
            });
        });
        this.positonFlipped++;
    }
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
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