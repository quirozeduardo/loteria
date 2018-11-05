import ButtonSprite from "../gameObjects/ButtonSprite";
import ButtonText from "../gameObjects/ButtonText";

export default class Board extends Phaser.Scene{
    constructor()
    {
       super({key: 'Board'});
       
       
       
    }

    create(){
        this.setBg(this);
        this.fichas = new Array();
        this.boardArrControl = new Array();
        this.messageWinn = null;
        for(var i = 0; i < 3; i++)
        {
            var arrtmp = new Array();
                for(var j = 0; j < 3; j++)
                {
                    arrtmp.push({
                        ocuped: false,
                        ocupedBy : null
                    });
                }
                this.boardArrControl.push(arrtmp);
        }
        this.board = this.selectBoardRandom();
        for(let i=2; i<=5; i++){
            let f = this.add.sprite(100,105*i,'frijolito');
            f.setScale(0.4);
            f.isOnBoard = false;
            this.fichas.push(f);
            this.dragAndDrop(f);
        }
        for(let i=1; i<=5; i++){
            let f = this.add.sprite(800,105*i,'frijolito');
            f.setScale(0.4);
            f.isOnBoard = false;
            this.fichas.push(f);
            this.dragAndDrop(f);
        }

        var buttonRestore = new ButtonText(this,100,130,170,50,'Restablecer','green');
        buttonRestore.button.action =()=>{
            this.restore();
        };
        buttonRestore.setScale(0.6);

        var buttonBack = new ButtonText(this,100,50,170,50,'Atras','red');
        buttonBack.button.action =()=>{
            this.scene.start('SelectMode');
        };
        buttonBack.setScale(0.6);

        var buttonChange = new ButtonText(this,100,90,170,50,'Cambiar','green');
        buttonChange.button.action =()=>{
            this.scene.start('Board');
        };
        buttonChange.setScale(0.6);
        this.sizing();
    }
    restore(sprite)
    {
        if(sprite != undefined){
            
            sprite.x=sprite.originalX;
            sprite.y=sprite.originalY;
            
        }else{
            for (let i = 0; i < this.fichas.length; i++)
            {
                this.fichas[i].x = this.fichas[i].originalX;
                this.fichas[i].y = this.fichas[i].originalY;
                this.fichas[i].isOnBoard = false;
            }
            this.boardArrControl = new Array();
            for(var i = 0; i < 3; i++)
            {
                var arrtmp = new Array();
                    for(var j = 0; j < 3; j++)
                    {
                        arrtmp.push({
                            ocuped: false,
                            ocupedBy : null
                        });
                    }
                    this.boardArrControl.push(arrtmp);
            }
            if(this.messageWinn != null)
            {
                this.messageWinn.destroy();
            }
        }
    }
    sizing()
    {
        let maxWidth = this.sys.game.config.width;
        let maxHeight = this.sys.game.config.height;


        let originalWidth = this.board.width;
        let originalHeight = this.board.height;
        

        let heightBoard = maxHeight;
        let scaleBoard = (heightBoard/originalHeight);
        this.board.setScale(scaleBoard);
        this.board.y = maxHeight / 2;
        this.board.x = maxWidth / 2;
    }
    selectBoardRandom()
    {
        let min = 1;
        let max = 24;
        let prefix = 'board_';
        let nBoard = Math.floor(Math.random()*(max-min+1)+min);
        let name = prefix+nBoard;
        let board = this.add.sprite(450,300,name);
        return board;
    }

    dragAndDrop(sprite)
    {
        sprite.originalX=sprite.x;
        sprite.originalY=sprite.y;
        sprite.setInteractive({ draggable: true });
        sprite.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
    
        });
        sprite.on('dragend', (pointer, dragX, dragY)=>{
            if(sprite.isOnBoard === true)
            {
                sprite.isOnBoard = false;
                this.boardArrControl[sprite.isOnBoardX][sprite.isOnBoardY].ocuped = false;
            }
            if(sprite.x<200||sprite.x>700)
            {
                this.restore(sprite);
            }else{

                let dx = sprite.x;
                let dy = sprite.y;
                let rx = (dx-200);
                let sux = 500 / 3;
                let fx;

                let suy = 600 / 3;
                let fy;

                let iC = 0;
                let jC = 0;

                for(let i=1; i<=3; i++)
                {
                    if(rx <= (sux * i)){
                        fx = sux * i;
                        iC = i-1;
                        break;
                    }
                    
                }
                for(let i=1; i<=3; i++)
                {
                    if(dy <= (suy * i))
                    {
                        fy = (suy * i)-(suy/2);
                        jC = i-1;
                        break;
                    }
                    
                }

                if(this.boardArrControl[iC][jC].ocuped === true)
                {
                    this.restore(sprite);
                    return;
                }
                sprite.isOnBoard = true;
                sprite.isOnBoardX = iC;
                sprite.isOnBoardY = jC;

                this.boardArrControl[iC][jC].ocuped = true;
                this.boardArrControl[iC][jC].ocupedBy = sprite;

                sprite.x = fx+(sprite.width/2);
                sprite.y = fy;

            }
            this.addWinnerIfAll();

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
    addWinnerIfAll()
    {
        for(var i = 0; i < this.fichas.length; i++)
            {
                if(this.fichas[i].isOnBoard ===  false)
                {
                    return;
                }

            }

        var gW = this.sys.game.config.width;
        var gH = this.sys.game.config.height;
        this.messageWinn = this.add.text(gW/2, gH/2, "¡Ganaste!", { fontFamily: "Arial Black", fontSize: 100, color: "#CF5B15" });
        this.messageWinn.setStroke('#F0C92C', 16);
        this.messageWinn.setOrigin(0.5);
        this.messageWinn.setScale(0);
        this.tweens.add({
            targets: this.messageWinn,
            scaleX: 1,
            scaleY: 1,
            duration: 1000,
            ease: 'Power2',
            hold: 3000,
            yoyo: true,
            repeat: -1
        });
    }
}