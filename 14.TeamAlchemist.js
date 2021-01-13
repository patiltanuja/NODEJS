//please install [npm install readline-sync]
let readline=require('readline-sync');
let studId =readline.question('please enter student id\n')
let favoriteSub=readline.question('please enter your favourite subject\n')
let city = readline.question('please enter your city/\n')
class Alchemist {
    constructor(studId, favoriteSub, city) {
        this.studId = studId;
        this.favoriteSub = favoriteSub;
        this.city = city;
    }
    show() {
        console.log(`${studId} ${favoriteSub} ${city}`)
    }
}
let a1 = new Alchemist(studId,favoriteSub,city);
console.log("");
a1.show();


