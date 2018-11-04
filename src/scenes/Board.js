import Card from "../gameObjects/Card";
import ButtonSprite from "../gameObjects/ButtonSprite";

export default class Board extends Phaser.Scene{
    constructor()
    {
       super({key: 'Board'});
       this.fichas = new Array();
    }

    create(){
        this.setBg(this);
        this.board = this.selectBoardRandom();
        for(let i=2; i<=5; i++){
            let f = this.add.sprite(100,105*i,'frijolito');
            f.setScale(0.4);
            this.fichas.push(f);
            this.dragAndDrop(f);
        }
        for(let i=1; i<=5; i++){
            let f = this.add.sprite(800,105*i,'frijolito');
            f.setScale(0.4);
            this.fichas.push(f);
            this.dragAndDrop(f);
        }
        let buttonRestore = new ButtonSprite(this,100,130,'button',{frameStart: 1, frameOver: 2, frameClick: 3, action: ()=>{
            this.restore();
        }});
        buttonRestore.setScale(0.4);
        let buttonBack = new ButtonSprite(this,100,30,'button',{frameStart: 1, frameOver: 2, frameClick: 3, action: ()=>{
            this.scene.start('SelectMode');
        }});
        buttonBack.setScale(0.4);
        let buttonChange = new ButtonSprite(this,100,80,'button',{frameStart: 1, frameOver: 2, frameClick: 3, action: ()=>{
            this.scene.start('Board');
        }});
        buttonChange.setScale(0.4);
        this.sizing();
    }
    restore()
    {
        for (let i = 0; i < this.fichas.length; i++)
        {
            this.fichas[i].x = this.fichas[i].originalX;
            this.fichas[i].y = this.fichas[i].originalY;
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
        sprite.on('dragend', function(pointer, dragX, dragY){
            if(this.x<200||this.x>700)
            {
                this.x=sprite.originalX;
                this.y=sprite.originalY;
            }else{
                let dx = this.x;
                let dy = this.y;
                let rx = (dx-200);
                let sux = 500 / 3;
                let fx;

                let suy = 600 / 3;
                let fy;

                for(let i=1; i<=3; i++)
                {
                    if(rx <= (sux * i)){
                        fx = sux * i;
                        break;
                    }
                }
                for(let i=1; i<=3; i++)
                {
                    if(dy <= (suy * i))
                    {
                        fy = (suy * i)-(suy/2);
                        break;
                    }
                }

                this.x = fx+(this.width/2);
                this.y = fy;

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