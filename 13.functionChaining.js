function NodejsSession(){
    this.programming = ()=>{
        console.log("design login page");
    return this;
    };

this.coding = ()=>{
    console.log("let's do coding");
};
}

let obj = new NodejsSession();
obj.programming().coding();