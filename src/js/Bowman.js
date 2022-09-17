import { Character } from "./Character";
export class Bowman extends Character {
    constructor(name, type) {
        super(name, type);
        super.attack = 25;
        super.defence = 25;
    }
}
