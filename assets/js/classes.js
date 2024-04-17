class Character {

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0 

    constructor(name){
        this.name = name
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }

}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 200;
        this.maxLife = this.life;
        this.attack = 25;
        this.defense = 18;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 160;
        this.maxLife = this.life;
        this.attack = 30;
        this.defense = 10;
    }
}

class LittleMonster extends Character {
    constructor(){
        super('Monstrinho')
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 18;
        this.defense = 10;
    }
}

class BigMonster extends Character {
    constructor(){
        super('Monstrão')
        this.life = 180;
        this.maxLife = this.life;
        this.attack = 22;
        this.defense = 14;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
    }

    start() {
        this.update();
    }

    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`


        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }
}
