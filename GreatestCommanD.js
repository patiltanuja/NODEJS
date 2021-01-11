class GreatestCommanD {
    static GCD(a, b) {
        for (let i = 1; i <= a && i <= b; i++) {

            if ((a % i == 0) && (b % i == 0)) {
                var gcd = i;
                console.log(gcd);
            }

        }
    }
}
GreatestCommanD.GCD(4, 8);