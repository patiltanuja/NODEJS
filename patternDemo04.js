let p = process.argv[2]
p = parseInt(p);
function num(p) {
    for (let i = 0; i < p; i++) {
        let s ="";
        for (let j = p - 1; j > i; j--) {
            s +="";
        }

        for (let j = 0; j <= i; j++) {
            s += "*";
        }
        for (let j = 1; j <= i; j++) {
            s += "*";
        }
        console.log(s);
    }
    for (let i = p - 2; i >= 0; i--) {
        let s ="";
        for (j = p - 1; j >= i; j--) {
            s +="";
        }

        for (let j = 0; j <= i; j++) {
            s += "*";
        }
        for (let j = 1; j <= i; j++) {
            s += "*";
        }
        console.log(s);
    }
}
num(p);