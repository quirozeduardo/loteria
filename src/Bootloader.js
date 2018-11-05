export default class Bootloader extends Phaser.Scene
{
    constructor()
    {
        super({key: 'Bootloader'})
    }
    preload()
    {
        this.load.path = './assets/'

        //Buttons
        this.load.atlas('btn_blue', 'buttons/btn_blue.png', 'buttons/btn_atlas.json');
        this.load.atlas('btn_green', 'buttons/btn_green.png', 'buttons/btn_atlas.json');
        this.load.atlas('btn_red', 'buttons/btn_red.png', 'buttons/btn_atlas.json');

        //Cards
        this.load.image('card_1','pics/baraja/1.png');
        this.load.image('card_2','pics/baraja/2.png');
        this.load.image('card_3','pics/baraja/3.png');
        this.load.image('card_4','pics/baraja/4.png');
        this.load.image('card_5','pics/baraja/5.png');
        this.load.image('card_6','pics/baraja/6.png');
        this.load.image('card_7','pics/baraja/7.png');
        this.load.image('card_8','pics/baraja/8.png');
        this.load.image('card_9','pics/baraja/9.png');
        this.load.image('card_10','pics/baraja/10.png');
        this.load.image('card_11','pics/baraja/11.png');
        this.load.image('card_12','pics/baraja/12.png');
        this.load.image('card_13','pics/baraja/13.png');
        this.load.image('card_14','pics/baraja/14.png');
        this.load.image('card_15','pics/baraja/15.png');
        this.load.image('card_16','pics/baraja/16.png');
        this.load.image('card_17','pics/baraja/17.png');
        this.load.image('card_18','pics/baraja/18.png');
        this.load.image('card_19','pics/baraja/19.png');
        this.load.image('card_20','pics/baraja/20.png');
        this.load.image('card_21','pics/baraja/21.png');
        this.load.image('card_22','pics/baraja/22.png');
        this.load.image('card_23','pics/baraja/23.png');
        this.load.image('card_24','pics/baraja/24.png');
        this.load.image('card_25','pics/baraja/25.png');
        this.load.image('card_26','pics/baraja/26.png');

        //Cards back
        this.load.image('card_back_1','pics/dichos/1a.png');
        this.load.image('card_back_2','pics/dichos/2a.png');
        this.load.image('card_back_3','pics/dichos/3a.png');
        this.load.image('card_back_4','pics/dichos/4a.png');
        this.load.image('card_back_5','pics/dichos/5a.png');
        this.load.image('card_back_6','pics/dichos/6a.png');
        this.load.image('card_back_7','pics/dichos/7a.png');
        this.load.image('card_back_8','pics/dichos/8a.png');
        this.load.image('card_back_9','pics/dichos/9a.png');
        this.load.image('card_back_10','pics/dichos/10a.png');
        this.load.image('card_back_11','pics/dichos/11a.png');
        this.load.image('card_back_12','pics/dichos/12a.png');
        this.load.image('card_back_13','pics/dichos/13a.png');
        this.load.image('card_back_14','pics/dichos/14a.png');
        this.load.image('card_back_15','pics/dichos/15a.png');
        this.load.image('card_back_16','pics/dichos/16a.png');
        this.load.image('card_back_17','pics/dichos/17a.png');
        this.load.image('card_back_18','pics/dichos/18a.png');
        this.load.image('card_back_19','pics/dichos/19a.png');
        this.load.image('card_back_20','pics/dichos/20a.png');
        this.load.image('card_back_21','pics/dichos/21a.png');
        this.load.image('card_back_22','pics/dichos/22a.png');
        this.load.image('card_back_23','pics/dichos/23a.png');
        this.load.image('card_back_24','pics/dichos/24a.png');
        this.load.image('card_back_25','pics/dichos/25a.png');
        this.load.image('card_back_26','pics/dichos/26a.png');

        

        //Boards
        this.load.image('board_1','pics/tableros/1t.png');
        this.load.image('board_2','pics/tableros/1tb.png');
        this.load.image('board_3','pics/tableros/2ta.png');
        this.load.image('board_4','pics/tableros/2tb.png');
        this.load.image('board_5','pics/tableros/3ta.png');
        this.load.image('board_6','pics/tableros/3ta3.png');
        this.load.image('board_7','pics/tableros/3tb.png');
        this.load.image('board_8','pics/tableros/3tb3.png');
        this.load.image('board_9','pics/tableros/4ta.png');
        this.load.image('board_10','pics/tableros/4ta2.png');
        this.load.image('board_11','pics/tableros/4tb.png');
        this.load.image('board_12','pics/tableros/4tb2.png');
        this.load.image('board_13','pics/tableros/5ta.png');
        this.load.image('board_14','pics/tableros/5ta2.png');
        this.load.image('board_15','pics/tableros/5tb.png');
        this.load.image('board_16','pics/tableros/5tb2.png');
        this.load.image('board_17','pics/tableros/6ta.png');
        this.load.image('board_18','pics/tableros/6ta2.png');
        this.load.image('board_19','pics/tableros/6tb.png');
        this.load.image('board_20','pics/tableros/6tb2.png');
        this.load.image('board_21','pics/tableros/7ta.png');
        this.load.image('board_22','pics/tableros/7ta2.png');
        this.load.image('board_23','pics/tableros/7tb.png');
        this.load.image('board_24','pics/tableros/7tb2.png');

        //others
        this.load.image('frijolito','pics/frijolito.png');
        this.load.image('card_back_main','pics/card_back_main.png');
        this.load.image('background','pics/background.png');



        
    }
    create(){
        this.scene.start('SelectMode');
    }

}