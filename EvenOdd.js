class EvenOdd
{
    static demo(n)
    {
        while(n>0)
        {
            if(n%2==0)
            {
                console.log("even:  "+n);
            }
            else
            {
                console.log("odd:  "+n);
            }
            n--;
        }

    }
}
EvenOdd.demo(4);