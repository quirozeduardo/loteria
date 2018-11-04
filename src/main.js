import Bootloader from './Bootloader';
import SelectMode from './scenes/SelectMode';
import Board from './scenes/Board';
import DeckTable from './scenes/DeckTable';

const width = 900;
const height = 600;

const config ={
    type: Phaser.CANVAS,
    width: width,
    height: height,
    parent: 'loteria',
    backgroundColor: '#392542',
    scene:[
        Bootloader,
        SelectMode,
        Board,
        DeckTable
    ]
};

const game = new Phaser.Game(config);
