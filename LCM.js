class LCM
{
    static test(a,b)
    {
        var lcm = (a>b)?a:b;
        while(lcm>0)
        {
            if(lcm%a==0 && lcm%b==0)
            {
                console.log(a,b,lcm);
                break;
            }
            --lcm;
        }
    }
}
LCM.test(4,6);