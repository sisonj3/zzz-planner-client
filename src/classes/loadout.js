export default class loadout {
    // String, ...int (0-9)
    constructor(name, d1 = 0, d2 = 0, d3 = 0, d4 = 0, d5 = 0, d6 = 0, sets = []) {
        this.name = name;
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;
        this.d4 = d4;
        this.d5 = d5;
        this.d6 = d6;
        this.sets = sets;
        this.subValue = ((d1 + d2 + d3 + d4 + d5 + d6) / 45).toFixed(2);
    }
}