import getImg from '../scripts/getImg';

const inventoryPath = '../assets/Inventory';

export default class material {
    constructor(name, amount = 0) {
        // Replace underscores if present
        this.name = name.replace(/_/g, ' ');
        this.imgUrl = getImg(inventoryPath, this.name);
        this.amount = amount;

        //console.log(this);
    }
}