const Character = require("./Character");

module.exports = class Warrior extends Character { 
    constructor(name, lifePoints, attackPts, defensePts, shieldPts){
        super(name, lifePoints, attackPts, defensePts, )
        this.shieldPts = shieldPts
        this.stance = 'attacking'
    }
    attaeck(targetCharacter){
        if ( this.stance ===  'attacking'){
            super.attack(targetCharacter)
        }
    }
    switchStance(){
        if (this.stance === 'attacking'){
            this.stance = 'defending'
            this.defensePts += this.shieldPts
        } else { 
            this.stance = 'attacking'
            this.defensePts -= this.shieldPts
        }
    }
}