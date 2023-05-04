const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const goku= new Mage('Goku', 90 , 4 , 2 , 14)
const vegeta = new Thief('Vegeta', 140, 22, 8)
const majinBoo = new Warrior('Majin Boo', 200 , 14 , 12, 4)

console.table({goku, vegeta , majinBoo})
majinBoo.switchStance()
goku.attack(majinBoo)
vegeta.attack(goku)

console.table({goku, vegeta , majinBoo})

majinBoo.attack(goku)
goku.heal(majinBoo)
vegeta.attack(majinBoo)

console.table({ goku, vegeta , majinBoo })