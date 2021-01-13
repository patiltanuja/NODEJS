class Game {
    constructor(jerseyNo=12, playerName, noOfMatches=2) {
        this.jerseyNo = jerseyNo;
        this.playerName = playerName;
        this.noOfMatches = noOfMatches;
    }
    //member function
    basketball(){
        return "hello"+this.playerName;
    }
}
//Game.constructor(12);
let g1 = new Game("james",4);
let g2 = new Game(7,"Anthony");


console.log(g1);
console.log(g2);