class Food{
constructor(tableNo,menuOrder){
    this.tableNo=tableNo;
    this.menuOrder=menuOrder;
}

letsEat(){
    return "spicy chicken biryani"
}
}
class chickenBiryani extends Food{
    constructor(tableNo,menuOrder,billAmount){
        super(tableNo,menuOrder);
        this.billAmount=billAmount;
    }
}
chickenBiryani.prototype = Object.create(Food.prototype);
chickenBiryani.prototype.constructor=chickenBiryani;
let kfc1 = new Food(420,"chikenBiriyani")

let kfc2 =  kfc1.letsEat();
console.log(kfc2);
console.log(kfc1);