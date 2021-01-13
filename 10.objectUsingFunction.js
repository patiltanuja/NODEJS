function Favorite(game,color)
{
    this.game = game;
    this.color =color;

    this.play =()=>{
        return "Tanuja is playing"+this.game;
    };
    this.playCric =()=>{
        return "Tanuja is playing"+this.game;
    };
}
let f1 = new Favorite("Basketball","blue");
let f2 = new Favorite("Cricket","purple");
let p1 = f1.play();
let p2 = f2.playCric();
console.log(p1,p2,f1,f2);