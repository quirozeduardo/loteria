export default class ContainerResponsive extends Phaser.GameObjects.Container
{
    constructor(scene, x, y, childs, options = {width: 0, height: 0})
    {
        super(scene, x, y, childs);
    }
}